import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import InformationSection from './components/InformationSection'
import HowItWorks from './components/HowItWorks'
import SafetyAndTestimonials from './components/SafetyAndTestimonials'
import FaqSection from './components/FaqSection'
import ContactAndDownload from './components/ContactAndDownload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <InformationSection/>
     <HowItWorks/>
     <SafetyAndTestimonials/>
     <FaqSection/>
     <ContactAndDownload/>
    </>
  )
}

export default App
