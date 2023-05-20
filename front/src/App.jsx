import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Player from './components/Player'
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
    
      <div className="container">
      <Player></Player>
      {audios != null ? <List audiosList={audios}></List> : <p>Loading...</p>}
      </div>
    
      
    </>
  )
}

export default App
