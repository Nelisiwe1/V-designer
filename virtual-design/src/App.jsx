import React from 'react';
import Navbar from './Navbar';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import Projects from './components/Projects';
 

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Blogs />
      <ContactUs />
      <Projects />
      <Services />
     
    </div>
  );
}

export default App;
