import React from 'react'

const Button = (props) => {
  const { label, style, onClick } = props
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  )
}

export default Button;