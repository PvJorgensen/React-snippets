import { useState } from 'react'
import './App.scss'
import { Main } from './Components/Partials/Main'
import { NavMain } from './Components/Partials/NavMain'
import { AppRouter } from './Components/AppRouter/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
     <NavMain></NavMain>
     <AppRouter></AppRouter>
    </div>
  )
}

export default App
