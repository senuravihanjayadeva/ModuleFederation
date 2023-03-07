import React from 'react'

function Alert({ msg, alertType }) {
  return (
    <div className={`alert alert-${alertType}`} role="alert">
      {msg}
    </div>
  )
}

export default Alert