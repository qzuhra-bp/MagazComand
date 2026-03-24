import { useId } from 'react'

export default function Input({
  label,
  helper,
  trailing,
  type = 'text',
  placeholder,
  defaultValue,
}) {
  const id = useId()

  return (
    <label className="ui-input" htmlFor={id}>
      {label ? <span className="ui-input__label">{label}</span> : null}

      <span className="ui-input__control">
        <input
          id={id}
          className="ui-input__field"
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        {trailing}
      </span>

      {helper ? <span className="ui-input__helper">{helper}</span> : null}
    </label>
  )
}
