import { EventHandlingExample } from './components/EventHandlingExample'
import { PropsExample } from './components/PropsExample'
import { StateExample } from './components/StateExample'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <h1>Simple React Examples</h1>
      <p>Props, state, and events in small examples.</p>
      <PropsExample />
      <StateExample />
      <EventHandlingExample />
    </main>
  )
}

export default App
