import './App.css';
import Header from './component/Header';  // correct path (singular folder)
import Hero from './component/Hero';
import About from './component/About';
import Project from './component/Project';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">   {/* use className */}
      <Header /> 
      <Hero />
              {/* use capital H */}
      <About />
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
