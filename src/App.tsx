import './App.css'
import { About } from './components/fragments/About'
import { Cards } from './components/fragments/Cards'
import { Eyes } from './components/fragments/Eyes'
import { Featured } from './components/fragments/Featured'
import { Footer } from './components/fragments/Footer'
import { LandingPage } from './components/fragments/LandingPage'
import { Marque } from './components/fragments/Marque'
import { Navbar } from './components/fragments/Navbar'

function App() {

  return (
    <>
      <div className="w-full min-h-screen">
        <Navbar/>
        <LandingPage/>
        <Marque/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
