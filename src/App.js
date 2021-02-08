import logo from './logo.svg'
import './App.css'

import { User, Post } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User userId={1} />
        <Post postId={1} />
      </header>
    </div>
  )
}

export default App
