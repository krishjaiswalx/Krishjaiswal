import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
   <>
   <Navbar />
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Experience/>
   <Achievements/>
   <Contact/>
   <Footer/>
   <CustomCursor/>
   </>
  )
}

export default App
