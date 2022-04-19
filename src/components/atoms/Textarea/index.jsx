import React, { Fragment } from 'react'

const Textarea = ({
  rows,
  label,
  placeholder,
  value,
  disabled,
  className,
  labelClassName,
}) => {
  return (
    <Fragment>
      {label && (
        <label
          className={`block text-gray-700 text-sm font-bold mb-2 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <textarea
        className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className} ${
          disabled ? 'cursor-not-allowed' : ''
        }`}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
      />
    </Fragment>
  )
}

export default Textarea
