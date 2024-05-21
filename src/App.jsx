import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [contatore, setContatore] = useState(0);
  const [colore, setColore] = useState();
  const [bottone, setBottone] = useState()
  const [bottone1, setBottone1] = useState()
  const [shadow, setShadow] = useState()

useEffect(() => {
    if (contatore === 0) {
      setColore("#0000ff24")
    }
    if (contatore>0) {
      setColore("#95e490")
    }
    if (contatore<0) {
      setColore("#ff3d00c9")
    }
  }, [contatore]);

useEffect(() => {
  if (colore === "#0000ff24") {
    setBottone("blue")
    setBottone1("green")
    setShadow("1px 1px 15px red")
  }
  if (colore === "#95e490") {
    setBottone("red")
    setBottone1("blue")
    setShadow("1px 1px 15px purple")
  }
  if (colore === "#ff3d00c9") {
    setBottone("green")
    setBottone1("red")
    setShadow("1px 1px 15px blue")
  }
}, [colore])

  

  return (
    <>
      <div style={{
        backgroundColor: colore,
        width: "100vw",
        height: "100vh",
        alignContent: "center",
        transition: "background-color 1s"
      }}>
        <button style={{
        backgroundColor: bottone1,
        borderRadius: "40px",
        display: "flex",
        justifyContent: "center",
        boxShadow: shadow,
        transition : "background-color 1s"
      }} onClick={() => setContatore(contatore + 1)}>
        Sali di un piano!
        </button>

        <p style={{fontFamily:"Arial", margin:"40px", textAlign:'center'}}>
          Ti trovi al piano numero <b>{contatore}</b>
        </p>

        <button style={{
        backgroundColor: bottone,
        borderRadius: "40px",
        display: "flex",
        justifyContent: "center",
        boxShadow: shadow,
        transition : "background-color 1s"
      }} onClick={() => setContatore(contatore - 1)}>
        Scendi di un piano!
        </button>
      </div>
    </>
  )
}

export default App
