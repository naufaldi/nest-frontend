import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  value,
  onChange,
  placeholder,
  label,
  type,
  id,
  className,
}) => {
  return (
    <div>
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' +
          className
        }
        placeholder={placeholder}
        required=""
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
Input.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Input
