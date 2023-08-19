import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label 
          htmlFor={name}
          className='flex text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-purple-600 hover:bg-purple-700 text-white mx-2 py-2 px-2 rounded-md'
            >
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='w-full bg-gray-100 border-2 border-gray-300 focus:border-blue-500 rounded-lg py-3.5 px-3 text-gray-800 text-sm text-alignfocus:outline-none focus:ring-2 focus:ring-blue-400'
        />
    </div>
  )
}

export default FormField
