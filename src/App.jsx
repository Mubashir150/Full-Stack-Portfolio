import About from "./components/About"
import Home from "./components/Home"
import Header from "./components/Header"
import {useState} from 'react';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isSelected,setIsSelected]=useState('home')

  

  function handleSelect(id){
    setIsSelected(`${id}`)
  }
  return (
    <>
      <Header onselect={handleSelect}/>
      {isSelected==='home' && <Home/>}
      {isSelected==='about' && <About/>}
      {isSelected==='skills' && <Skills/>}
      {isSelected==='projects' && <Projects/>}
      {isSelected==='contact' && <Contact/>}
    </>
  )
}

export default App
