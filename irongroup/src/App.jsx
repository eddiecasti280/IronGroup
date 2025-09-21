import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillView from './components/SkillView'
import "nes.css/css/nes.min.css"

function App() {

  return (
    <>
      <h1>Skills Tracker</h1>
      <SkillView />
    </>
  )
}

export default App
