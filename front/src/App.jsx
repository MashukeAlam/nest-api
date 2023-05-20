import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [audios, setAudios] = useState(null)

  useEffect(() => {
    axios.get('/api').then(res => setAudios(res.data)).catch(err => console.error(err))
    console.log(audios);
  }, [])
  return (
    <>
    
      
      {audios != null ? <List listName={"Audios"} audiosList={audios}></List> : <p>Loading...</p>}
    
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
