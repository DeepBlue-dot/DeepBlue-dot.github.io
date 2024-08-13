import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Skill from './Components/Skill/Skill';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {

    return (
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Skill/>
        <Services/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
       </>
    )
}

export default App;
