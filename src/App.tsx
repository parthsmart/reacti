import { PropsExample } from './components/PropsExample'
import { StateExample } from './components/StateExample'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="hero-section">
        <span className="eyebrow">Reacti · React fundamentals</span>
        <h1>Learn React by building small examples.</h1>
        <p>
          Each lesson focuses on one idea and keeps the code close to the UI
          you can see.
        </p>
      </header>
      <PropsExample />
      <StateExample />
    </main>
  )
}

export default App
