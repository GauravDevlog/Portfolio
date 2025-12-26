import Header from "./components/header/Header"
import Home from "./components/home/Home"
import "./App.css"
import Contact from "./components/contact/Contact"
import Experience from "./components/Experience"
// import ProjectCard from "./components/project/Project Card"
function App() {

  return (
    <>
    <div className="app">
      <Header/>
      <Home/>
      <Experience/>
      <Contact/>
      
    </div>
    </>
  )
}

export default App
