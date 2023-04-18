import './App.css'
import Nav from './components/Nav'
import List from './components/List'
import { Container } from '@mui/material'


function App() {

  return (
    <Container 
      sx={{
        bgcolor: 'navajowhite', 
        height: '100vh', 
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Nav/>
      <List/>
    </Container>
  )
}

export default App
