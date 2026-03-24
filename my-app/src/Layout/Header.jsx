function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M14.5 5.5L8 12l6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M5 7h14M5 12h14M5 17h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Header({
  title,
  subtitle,
  canGoBack = false,
  onBack,
  onOpenMenu,
}) {
  return (
    <header className="app-header">
      <div className="app-header__side">
        {canGoBack ? (
          <button className="icon-button" type="button" aria-label="Go back" onClick={onBack}>
            <ArrowLeftIcon />
          </button>
        ) : null}
      </div>

      <div className="app-header__copy">
        <div className="app-header__eyebrow">{subtitle}</div>
        <h1 className="app-header__title">{title}</h1>
      </div>

      <div className="app-header__side app-header__side--end">
        <button className="icon-button" type="button" aria-label="Open route map" onClick={onOpenMenu}>
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
