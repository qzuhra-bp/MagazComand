export default function Container({ children, className = '' }) {
  const classes = ['ui-container', className].filter(Boolean).join(' ')

  return <div className={classes}>{children}</div>
}
