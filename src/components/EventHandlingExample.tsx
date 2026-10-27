import { useState } from 'react'

export function EventHandlingExample() {
  const [message, setMessage] = useState('Hello Bishwas')

  return (
    <div className="example-card">
      <p>{message}</p>
      <button type="button" onClick={() => setMessage('Button clicked!')}>
        Click me
      </button>
    </div>
  )
}
