import { useState } from 'react'
import './App.css'

function App() {
  const [contatore, setContatore] = useState(0);

  return (
    <>
      <button style={{
      backgroundColor: "green",
      borderRadius: "40px",
      display: "flex",
      justifyContent: "center",
     }} onClick={() => setContatore(contatore + 1)}>
      Sali di un piano!
      </button>

      <p style={{fontFamily:"Arial", margin:"40px", textAlign:'center'}}>
        Ti trovi al piano numero <b>{contatore}</b>
      </p>

      <button style={{
      backgroundColor: "red",
      borderRadius: "40px",
      display: "flex",
      justifyContent: "center"
     }} onClick={() => setContatore(contatore - 1)}>
      Scendi di un piano!
      </button>
    </>
  )
}

export default App
