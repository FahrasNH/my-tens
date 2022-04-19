import React, { Fragment } from 'react'

const Button = ({ children, className, primary }) => {
  return (
    <Fragment>
      <button
        type="button"
        className={`hover:font-semibold font-medium rounded-lg text-sm px-5 py-2.5 w-full ${className} ${
          primary
            ? 'text-[#1956DB] border border-[#1956DB] hover:border-blue-800 hover:text-blue-800'
            : 'text-[#F04438] hover:text-[#E92E21]'
        }`}
      >
        {children}
      </button>
    </Fragment>
  )
}

export default Button
