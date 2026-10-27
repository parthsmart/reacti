import { useState } from 'react'

export function StateExample() {
  const [message, setMessage] = useState('Hello Bishwas')

  return (
    <div className="example-card">
      <p>{message}</p>
      <button type="button" onClick={() => setMessage('Goodbye Bishwas')}>
        Change message
      </button>
    </div>
  )
}
