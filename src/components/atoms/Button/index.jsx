import React, { Fragment } from 'react'

const Button = ({ children, className, isButton, width, ...props }) => {
  let isButtonStatus = ''

  switch (isButton) {
    case 'primary':
      isButtonStatus =
        'text-[#1956DB] border border-[#1956DB] hover:border-blue-800 hover:text-blue-800'
      break
    case 'secondary':
      isButtonStatus = 'text-[#F04438] hover:text-[#E92E21]'
      break
    default:
      break
  }

  return (
    <Fragment>
      <button
        {...props}
        type="button"
        className={`hover:font-semibold font-medium rounded-lg text-sm px-5 py-2.5 w-${
          width ? width : 'full'
        } ${className} ${isButtonStatus}`}
      >
        {children}
      </button>
    </Fragment>
  )
}

export default Button
