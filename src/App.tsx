import { PropsExample } from './components/PropsExample'
import { StateExample } from './components/StateExample'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <h1>Simple React Examples</h1>
      <p>Props and state in small examples.</p>
      <PropsExample />
      <StateExample />
    </main>
  )
}

export default App
