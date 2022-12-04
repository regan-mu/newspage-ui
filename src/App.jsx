import { useState } from 'react'
import './App.css'
import {Navbar} from "./components"
import {Header, Trending} from "./container"

function App() {

  return (
    <div className="news">
      <Navbar />
      <Header />
      <Trending />
    </div>
  )
}

export default App
