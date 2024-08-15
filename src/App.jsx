import React, { useState } from 'react'
import './App.css'
import CardTable from "./CardTable"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardTable />
    </>
  )
}

export default App
