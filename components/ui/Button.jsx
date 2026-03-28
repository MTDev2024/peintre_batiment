// 1. Next.js
import Link from 'next/link'

/**
 * Button — Composant bouton réutilisable
 * Rendu comme <Link> si `href` est fourni, sinon comme <button>.
 * @param {Object}  props
 * @param {'primary'|'secondary'|'ghost'} props.variant
 * @param {'sm'|'md'|'lg'}               props.size
 * @param {string}  [props.href]      - Rend le bouton comme un lien Next.js
 * @param {string}  [props.className] - Classes supplémentaires
 * @param {React.ReactNode} props.children
 */
export default function Button({
  variant  = 'primary',
  size     = 'md',
  href,
  className = '',
  children,
  ...props
}) {
  const base = [
    'inline-flex items-center font-medium rounded-md',
    'transition-colors',
  ].join(' ')

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
    secondary:
      'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white',
    ghost:
      'text-neutral-700 hover:bg-neutral-100',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
