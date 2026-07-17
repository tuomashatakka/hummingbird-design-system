import type { ChangeEvent, FC } from 'react'


interface Option {
  value: string
  label: string
}

interface SelectProps {
  options:   Option[]
  name?:     string
  id?:       string
  value?:    string
  disabled?: boolean
  required?: boolean
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

/**
 * A native `<select>` styled through `appearance: base-select` (see base.css):
 * where the platform supports it the dropdown renders as our own popover menu —
 * a button-link-style option list matching the design language — while keeping
 * full keyboard nav, accessibility, and form participation. No JS, no fallback
 * code, no non-degrading markup: the UA supplies the closed-control button, so
 * the element stays a plain `<select>` and engines without base-select simply
 * show the platform control.
 */
export const Select: FC<SelectProps> = ({
  options,
  name,
  id,
  value,
  disabled = false,
  required = false,
  onChange,
}) =>
  <select
    id={ id }
    name={ name }
    value={ value }
    disabled={ disabled }
    required={ required }
    onChange={ onChange }>
    {options.map(option =>
      <option key={ option.value } value={ option.value }>{option.label}</option>)}
  </select>

Select.displayName = 'Select'
