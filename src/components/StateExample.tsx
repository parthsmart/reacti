import { useState } from 'react'

export function StateExample() {
  const [tasks, setTasks] = useState(['Read the props lesson'])

  function addTask() {
    setTasks((currentTasks) => [
      ...currentTasks,
      `Practice task ${currentTasks.length + 1}`,
    ])
  }

  return (
    <section className="lesson" aria-labelledby="state-heading">
      <div className="lesson-copy">
        <span className="lesson-number">02</span>
        <h2 id="state-heading">State remembers changes</h2>
        <p>
          State is data a component owns and can update. Calling the setter
          schedules a re-render so the UI stays in sync.
        </p>
        <pre>
          <code>{'const [tasks, setTasks] = useState(initialTasks)'}</code>
        </pre>
      </div>
      <div className="example-card">
        <span className="eyebrow">Stateful component</span>
        <h3>{tasks.length} learning tasks</h3>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <button type="button" className="primary-button" onClick={addTask}>
          Add a task
        </button>
      </div>
    </section>
  )
}
