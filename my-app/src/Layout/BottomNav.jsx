const items = [
  { key: '/', label: 'Base' },
  { key: '/favorites', label: 'Fav' },
  { key: '/order-details', label: 'Order' },
  { key: '/tracking', label: 'Track' },
]

function NavIcon({ kind }) {
  const icons = {
    base: (
      <path
        d="M5 10.5L12 5l7 5.5V19a1 1 0 0 1-1 1h-4.5v-5h-3v5H6a1 1 0 0 1-1-1v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    fav: (
      <path
        d="M12 20s-6.7-4.3-8.6-8C1.3 8.8 3.3 5 7.1 5c2 0 3.1 1 3.9 2.2C11.8 6 12.9 5 14.9 5 18.7 5 20.7 8.8 20.6 12 18.7 15.7 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    order: (
      <path
        d="M8 5.5h8M8 9.5h8M8 13.5h5M6 4h12a1 1 0 0 1 1 1v14l-3-2-3 2-3-2-3 2V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    track: (
      <path
        d="M12 20c4.1-4.3 6-7.4 6-10a6 6 0 1 0-12 0c0 2.6 1.9 5.7 6 10Zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none">
      {icons[kind]}
    </svg>
  )
}

export default function BottomNav({ currentRoute, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map((item) => {
        const kind =
          item.key === '/'
            ? 'base'
            : item.key === '/favorites'
              ? 'fav'
              : item.key === '/order-details'
                ? 'order'
                : 'track'

        return (
          <button
            key={item.key}
            type="button"
            className={`bottom-nav__item ${currentRoute === item.key ? 'is-active' : ''}`}
            onClick={() => onNavigate(item.key)}
          >
            <NavIcon kind={kind} />
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
