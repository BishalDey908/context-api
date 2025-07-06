
import Home from '../components/Home'
import {  BioProvider } from '../context'
import About from '../pages/About'
import './App.css'
function App() {
  

  return (
    <>
    {/* Components wrap with provider */}
    <BioProvider>
        <Home/>
        <About/>
    </BioProvider>
    </>
  )
}

export default App
