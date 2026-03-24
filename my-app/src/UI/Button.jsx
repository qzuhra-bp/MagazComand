export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  onClick,
}) {
  const className = `ui-btn ui-btn--${variant} ${fullWidth ? 'ui-btn--full' : ''}`.trim()

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
