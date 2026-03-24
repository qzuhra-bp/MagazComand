export default function Modal({ children, open, onClose, title }) {
  if (!open) {
    return null
  }

  return (
    <div className="ui-modal" role="presentation" onClick={onClose}>
      <div
        className="ui-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="ui-modal__header">
          <h2 className="ui-modal__title">{title}</h2>
          <button className="icon-button" type="button" aria-label="Close modal" onClick={onClose}>
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
