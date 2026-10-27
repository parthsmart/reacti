import { PropsExample } from './components/PropsExample'
import { StateExample } from './components/StateExample'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <h1>React Props</h1>
      <p>Props let a component receive data.</p>
      <PropsExample />
      <StateExample />
    </main>
  )
}

export default App
