import './App.css'
import { LandingPage } from './components/fragments/LandingPage'
import { Navbar } from './components/fragments/Navbar'

function App() {

  return (
    <>
      <div className="w-full h-screen">
        <Navbar/>
        <LandingPage/>
      </div>
    </>
  )
}

export default App
