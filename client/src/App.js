import logo from './logo.svg';
import './App.css'
import React, { useEffect, useState } from 'react'

function App() {

  const [backend, setBackend] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackend(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backend.users === 'undefined') ? (
        <p>Loading</p>
      ) : (
        backend.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App
