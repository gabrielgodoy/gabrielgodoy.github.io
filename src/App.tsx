import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Gabriel Godoy</h2>
        <p>Front-end developer</p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/gabrielgodoy1/"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gabrielgodoy"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="mailto: gabrielgodoyon@gmail.com"
            target="_blank"
            className="icon"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </header>
    </div>
  )
}

export default App
