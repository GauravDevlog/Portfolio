import Header from "./components/header/Header"
import Home from "./components/home/Home"
import "./App.css"


import Contact from "./components/contact/Contact"
import Experience from "./components/Experience"

import Projects from "./components/project/Projects"
// import ProjectCard from "./components/project/Project Card"

import {BrowserRouter , Links , Route , Routes} from "react-router-dom"
function App() {

  return (
    <>
    <div className="app">
      <BrowserRouter>
      <Header/>
      {/* <Home/> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Contact/>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
