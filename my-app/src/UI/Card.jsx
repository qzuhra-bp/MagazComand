export default function Card({ children, variant, className = '' }) {
  const variantClass = variant ? `ui-card--${variant}` : ''
  const classes = ['ui-card', variantClass, className].filter(Boolean).join(' ')

  return <section className={classes}>{children}</section>
}
