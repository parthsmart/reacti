import { type FormEvent, useState } from 'react'

export function EventHandlingExample() {
  const [message, setMessage] = useState('Waiting for an event...')
  const [name, setName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(name.trim() ? `Welcome, ${name.trim()}!` : 'Please enter your name.')
  }

  return (
    <section className="lesson" aria-labelledby="events-heading">
      <div className="lesson-copy">
        <span className="lesson-number">03</span>
        <h2 id="events-heading">Events respond to users</h2>
        <p>
          Event handlers are functions that run after an interaction. Read
          the event object, update state, or prevent the browser default.
        </p>
        <pre>
          <code>{'<form onSubmit={handleSubmit}>'}</code>
        </pre>
      </div>
      <div className="example-card">
        <span className="eyebrow">Interactive component</span>
        <form className="lesson-form" onSubmit={handleSubmit}>
          <label htmlFor="learner-name">Your name</label>
          <input
            id="learner-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type your name"
          />
          <button type="submit" className="primary-button">
            Submit
          </button>
        </form>
        <p className="event-message" aria-live="polite">
          {message}
        </p>
      </div>
    </section>
  )
}
