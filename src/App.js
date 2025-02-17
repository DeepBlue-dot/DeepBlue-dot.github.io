import './App.css';
import { useEffect } from 'react';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skill from './Components/Skill/Skill';
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
    useEffect(()=>{
        Aos.init({
            duration: 500,
            easing:"ease-in-sine"
        })
    },[])

    return (
        <>
        <Navbar/>
        <Hero/>
        <Skill/>
        <Projects/>
        <Contact/>
        <Footer/>
       </>
    )
}

export default App;
