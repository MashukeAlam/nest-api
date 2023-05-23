import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Player from './components/Player'
import List from './components/List'
import axios from 'axios'

function App() {
  const [audios, setAudios] = useState(null)
  const [song, setSong] = useState(null);

  const change = (name) => {
    console.log('here', name);
    setSong(name.name);
  }

  useEffect(() => {
    axios.get('/api').then(res => setAudios(res.data)).catch(err => console.error(err))
    console.log(audios);
  }, [])
  return (
    <>
    
      <div className="container">
      <Player song={song}></Player>
      {audios != null ? <List change={change} audiosList={audios}></List> : <p>Loading...</p>}
      </div>
    
      
    </>
  )
}

export default App
