import { useEffect, useState } from 'react'
import Header from '../Layout/Header.jsx'
import BottomNav from '../Layout/BottomNav.jsx'
import Badge from '../UI/Badge.jsx'
import Button from '../UI/Button.jsx'
import Card from '../UI/Card.jsx'
import Container from '../UI/Container.jsx'
import Input from '../UI/Input.jsx'
import Loader from '../UI/Loader.jsx'
import Modal from '../UI/Modal.jsx'

const reservedRoutes = [
  {
    path: '/welcome',
    title: 'Welcome screen',
    owner: 'Dastan',
    note: 'Reserved for auth entry and onboarding flow.',
  },
  {
    path: '/login',
    title: 'Login screen',
    owner: 'Dastan',
    note: 'Reserved for sign in form and auth links.',
  },
  {
    path: '/register',
    title: 'Register screen',
    owner: 'Dastan',
    note: 'Reserved for sign up form and auth state switch.',
  },
  {
    path: '/home',
    title: 'Home screen',
    owner: 'Marsel',
    note: 'Reserved for search, categories, product list and feed UI.',
  },
  {
    path: '/product',
    title: 'Product details',
    owner: 'Marsel',
    note: 'Reserved for product card, gallery and size selector flow.',
  },
  {
    path: '/checkout',
    title: 'Checkout flow',
    owner: 'Ilyaz',
    note: 'Reserved for stepper, address, payment and place order flow.',
  },
]

const routeMeta = {
  '/': {
    title: 'UI Foundation',
    subtitle: 'aknur / shared base',
  },
  '/favorites': {
    title: 'Favorites Demo',
    subtitle: 'safe shared preview',
  },
  '/order-details': {
    title: 'Order Details Demo',
    subtitle: 'safe shared preview',
  },
  '/tracking': {
    title: 'Tracking Demo',
    subtitle: 'safe shared preview',
  },
  '/order-success': {
    title: 'Success Demo',
    subtitle: 'safe shared preview',
  },
}

function getRoute() {
  if (typeof window === 'undefined') {
    return '/'
  }

  const hash = window.location.hash.replace(/^#/, '') || '/'

  if (routeMeta[hash] || reservedRoutes.some((route) => route.path === hash)) {
    return hash
  }

  return '/'
}

function ProductPreview({ symbol, title, meta, price }) {
  return (
    <Card>
      <div className="list-item">
        <div className="media-thumb" aria-hidden="true">
          {symbol}
        </div>
        <div className="list-copy">
          <h4>{title}</h4>
          <p>{meta}</p>
        </div>
        <div className="price-copy">{price}</div>
      </div>
    </Card>
  )
}

function ReservedScreen({ route, onNavigate }) {
  return (
    <div className="placeholder-screen">
      <Badge tone="warning">reserved</Badge>
      <h3>{route.title}</h3>
      <p>
        This route belongs to <strong>{route.owner}</strong>. I left the source page file untouched, so your team
        can keep working without conflicts.
      </p>
      <p className="route-note">{route.note}</p>
      <div className="button-row">
        <Button onClick={() => onNavigate('/')}>Back to base</Button>
        <Button variant="secondary" onClick={() => onNavigate('/favorites')}>
          Open demo screen
        </Button>
      </div>
    </div>
  )
}

function WorkspacePage({ onNavigate, onOpenMenu }) {
  return (
    <Container>
      <section className="workspace-hero">
        <Badge tone="info">branch aknur</Badge>
        <h2>Shared app shell for the whole team</h2>
        <p>
          This branch only covers the safe foundation layer: shared styles, layout, router and reusable UI blocks.
          Reserved feature files stay untouched.
        </p>
        <div className="button-row space-top">
          <Button onClick={() => onNavigate('/favorites')}>Preview demo screens</Button>
          <Button variant="secondary" onClick={onOpenMenu}>
            Open route map
          </Button>
        </div>
      </section>

      <Card>
        <div className="section-title">
          <h3>UI Kit</h3>
          <Badge tone="success">shared</Badge>
        </div>

        <div className="button-row">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <div className="ui-grid">
          <Input label="Email" placeholder="hello@shop.app" helper="Shared input style for forms." />
          <Input
            label="Search"
            placeholder="Search products"
            helper="Use in header or filter areas."
            trailing={<Badge tone="neutral">UI</Badge>}
          />
        </div>

        <div className="chip-row">
          <Badge tone="neutral">Container</Badge>
          <Badge tone="info">Button</Badge>
          <Badge tone="success">Card</Badge>
          <Badge tone="warning">Modal</Badge>
        </div>

        <div className="status-row">
          <div>
            <strong>Loader</strong>
            <p className="meta-text">Ready for async states and waiting screens.</p>
          </div>
          <Loader label="Loading" />
        </div>
      </Card>

      <Card>
        <div className="section-title">
          <h3>Safe demos</h3>
          <Badge tone="neutral">no team conflicts</Badge>
        </div>
        <div className="workspace-links">
          <Button variant="secondary" onClick={() => onNavigate('/favorites')}>
            Favorites
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('/order-details')}>
            Order details
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('/tracking')}>
            Tracking
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('/order-success')}>
            Success
          </Button>
        </div>
      </Card>

      <Card variant="outline">
        <div className="section-title">
          <h3>Reserved routes</h3>
          <Badge tone="warning">hands off</Badge>
        </div>

        {reservedRoutes.map((route) => (
          <div key={route.path} className="route-card__head">
            <div>
              <strong>{route.title}</strong>
              <p className="meta-text">{route.owner}</p>
            </div>
            <Button variant="ghost" onClick={() => onNavigate(route.path)}>
              View lock
            </Button>
          </div>
        ))}
      </Card>
    </Container>
  )
}

function FavoritesPage({ onNavigate }) {
  const items = [
    { symbol: 'PS', title: 'Puma Sprint Shoe', meta: 'Size 40 · Qty 1 · Black', price: '$23.87' },
    { symbol: 'NB', title: 'Nike High Runner', meta: 'Size 41 · Qty 1 · Red', price: '$32.67' },
    { symbol: 'WB', title: 'Wave Breeze', meta: 'Size 42 · Qty 1 · White', price: '$65.98' },
    { symbol: 'AB', title: 'Air Blue', meta: 'Size 41 · Qty 1 · Blue', price: '$34.98' },
  ]

  return (
    <Container>
      <Card className="ui-card--soft">
        <div className="section-title">
          <h3>Favorite list</h3>
          <Badge tone="info">demo</Badge>
        </div>
        <div className="chip-row">
          <Badge tone="neutral">Shoes</Badge>
          <Badge tone="neutral">Bags</Badge>
          <Badge tone="neutral">Clothes</Badge>
        </div>
      </Card>

      {items.map((item) => (
        <ProductPreview key={item.title} {...item} />
      ))}

      <Button fullWidth onClick={() => onNavigate('/order-details')}>
        Continue to order details
      </Button>
    </Container>
  )
}

function OrderDetailsPage({ onNavigate }) {
  return (
    <Container>
      <Card>
        <div className="section-title">
          <h3>Order item</h3>
          <Badge tone="success">paid</Badge>
        </div>
        <div className="list-item">
          <div className="media-thumb" aria-hidden="true">
            PS
          </div>
          <div className="summary-copy">
            <h4>Puma Running Shoe</h4>
            <p>Size 40 · Quantity 1 · White</p>
          </div>
          <div className="price-copy">$23.87</div>
        </div>
      </Card>

      <Card>
        <div className="section-title">
          <h3>Delivery address</h3>
          <Badge tone="neutral">saved</Badge>
        </div>
        <p className="screen-copy">
          Anida Kate
          <br />
          253 Housing Estate, India 31165
          <br />
          +91 256 589 6410
        </p>
      </Card>

      <Card>
        <div className="section-title">
          <h3>Payment method</h3>
          <Badge tone="info">card</Badge>
        </div>
        <div className="detail-row">
          <div>
            <strong>Credit Card</strong>
            <p className="meta-text">5447 5438 3254 ****</p>
          </div>
          <Badge tone="success">secure</Badge>
        </div>
      </Card>

      <div className="button-row">
        <Button fullWidth onClick={() => onNavigate('/tracking')}>
          Track order
        </Button>
        <Button fullWidth variant="secondary" onClick={() => onNavigate('/order-success')}>
          Open success state
        </Button>
      </div>
    </Container>
  )
}

function TrackingPage({ onNavigate }) {
  const steps = [
    { title: 'Moving from warehouse', note: '12, Anywhere street, Delhi' },
    { title: 'In transit', note: 'Package is on the way to delivery point' },
    { title: 'Out for delivery', note: 'Courier will contact the customer soon' },
    { title: 'Delivered', note: '17 October 2024' },
  ]

  return (
    <Container>
      <Card className="ui-card--soft">
        <div className="section-title">
          <h3>Tracking summary</h3>
          <Badge tone="info">live</Badge>
        </div>
        <p className="screen-copy">Puma Running Shoe · # T ID123456789</p>
      </Card>

      <Card>
        <div className="timeline">
          {steps.map((step) => (
            <div key={step.title} className="timeline-item">
              <div className="timeline-item__marker" />
              <div>
                <h4>{step.title}</h4>
                <p>{step.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Button fullWidth variant="secondary" onClick={() => onNavigate('/order-details')}>
        Back to order details
      </Button>
    </Container>
  )
}

function OrderSuccessPage({ onNavigate }) {
  return (
    <div className="success-screen">
      <div className="success-orb" aria-hidden="true">
        OK
      </div>
      <Badge tone="success">demo state</Badge>
      <h3>Order placed</h3>
      <p>Your foundation branch includes a reusable success state without touching the checkout files.</p>
      <div className="button-row">
        <Button onClick={() => onNavigate('/order-details')}>My order details</Button>
        <Button variant="secondary" onClick={() => onNavigate('/')}>
          Continue working
        </Button>
      </div>
    </div>
  )
}

function RouteMapModal({ open, onClose, onNavigate }) {
  return (
    <Modal open={open} onClose={onClose} title="Route map">
      <Container>
        <Card className="ui-card--soft">
          <div className="section-title">
            <h4>Foundation branch</h4>
            <Badge tone="info">aknur</Badge>
          </div>
          <div className="workspace-links">
            <Button variant="secondary" onClick={() => onNavigate('/')}>
              Base
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('/favorites')}>
              Favorites
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('/order-details')}>
              Order
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('/tracking')}>
              Tracking
            </Button>
          </div>
        </Card>

        <Card variant="outline">
          <div className="section-title">
            <h4>Reserved by teammates</h4>
            <Badge tone="warning">locked</Badge>
          </div>

          {reservedRoutes.map((route) => (
            <div key={route.path} className="route-card__head">
              <div>
                <strong>{route.title}</strong>
                <p className="meta-text">{route.owner}</p>
              </div>
              <Button variant="ghost" onClick={() => onNavigate(route.path)}>
                Open
              </Button>
            </div>
          ))}
        </Card>
      </Container>
    </Modal>
  )
}

export default function AppRouter() {
  const [route, setRoute] = useState(getRoute)
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    if (!window.location.hash) {
      window.location.hash = '/'
    }

    const handleHashChange = () => {
      setRoute(getRoute())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const navigate = (nextRoute) => {
    setModalOpen(false)

    if (typeof window === 'undefined') {
      setRoute(nextRoute)
      return
    }

    if (window.location.hash === `#${nextRoute}`) {
      setRoute(nextRoute)
      return
    }

    window.location.hash = nextRoute
  }

  const activeReservedRoute = reservedRoutes.find((item) => item.path === route)
  const activeMeta = routeMeta[route] ?? {
    title: activeReservedRoute?.title ?? 'UI Foundation',
    subtitle: activeReservedRoute ? `${activeReservedRoute.owner} / reserved route` : 'aknur / shared base',
  }

  let screen = <WorkspacePage onNavigate={navigate} onOpenMenu={() => setModalOpen(true)} />

  if (route === '/favorites') {
    screen = <FavoritesPage onNavigate={navigate} />
  } else if (route === '/order-details') {
    screen = <OrderDetailsPage onNavigate={navigate} />
  } else if (route === '/tracking') {
    screen = <TrackingPage onNavigate={navigate} />
  } else if (route === '/order-success') {
    screen = <OrderSuccessPage onNavigate={navigate} />
  } else if (activeReservedRoute) {
    screen = <ReservedScreen route={activeReservedRoute} onNavigate={navigate} />
  }

  return (
    <div className="app-shell">
      <div className="phone-frame">
        <Header
          title={activeMeta.title}
          subtitle={activeMeta.subtitle}
          canGoBack={route !== '/'}
          onBack={() => navigate('/')}
          onOpenMenu={() => setModalOpen(true)}
        />

        <main className="screen-body">{screen}</main>

        <BottomNav currentRoute={route} onNavigate={navigate} />

        <RouteMapModal open={isModalOpen} onClose={() => setModalOpen(false)} onNavigate={navigate} />
      </div>
    </div>
  )
}
