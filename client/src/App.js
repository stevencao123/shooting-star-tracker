import logo from './logo.svg';
import './App.css'
import React, { useEffect, useState } from 'react'
import Nav from './components/Nav';


function App() {

  //const [backend, setBackend] = useState([{}])
  /*
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackend(data)
      }
    )
  }, [])
  */

  return (
    <>
      <Nav />
    </>
  )
}

export default App
