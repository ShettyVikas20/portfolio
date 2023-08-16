
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import About from './components/about'
import Contact from './components/Contact'

function App() {

  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Work />
     <Contact />
     </div>
  )
}

export default App