// Variables d'environnement requises dans .env.local :
// RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
// RESEND_FROM_EMAIL=contact@moreau-peinture.fr
// RESEND_TO_EMAIL=julien@moreau-peinture.fr

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// ⚠️ Zod v4 — syntaxe identique à v3 pour les cas d'usage de base
const contactSchema = z.object({
  name:    z.string().min(2,  'Le nom doit contenir au moins 2 caractères'),
  email:   z.string().email('Adresse email invalide'),
  phone:   z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

/**
 * POST /api/contact
 * Valide les données, envoie un email via Resend.
 * @returns {{ success: boolean, message: string }}
 */
export async function POST(request) {
  try {
    const body = await request.json()

    // Validation serveur
    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return Response.json(
        { success: false, message: 'Données invalides.', errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, phone, service, message } = result.data

    await resend.emails.send({
      from:    process.env.RESEND_FROM_EMAIL,
      to:      process.env.RESEND_TO_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}`,
      html: `
        <h2>Nouvelle demande de devis — Moreau Peinture</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;width:140px">Nom</td><td style="padding:8px">${name}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${phone || '—'}</td></tr>
          <tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Prestation</td><td style="padding:8px">${service || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
        </table>
        <p style="margin-top:24px;color:#888;font-size:12px">
          Message reçu via le formulaire de contact de moreau-peinture.fr
        </p>
      `,
    })

    return Response.json({ success: true, message: 'Votre message a bien été envoyé. Je vous réponds sous 48 h.' })

  } catch {
    return Response.json(
      { success: false, message: 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement.' },
      { status: 500 }
    )
  }
}
