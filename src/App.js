import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Buy from './Components/Buy';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Testemonial from './Components/Testemonial';

function App() {
  const [aBackgroundColor, setBackgroundColor] = useState('#222222');
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
      <div className="App bg-black">
        <Header />
        <Hero />
        <About />
        <Testemonial />
        <Buy />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
