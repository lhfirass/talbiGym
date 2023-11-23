import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Who from './Who';
import Testemonial from './Testemonial';
import Buy from './About';
import Contact from './Contact';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [aBackgroundColor, setBackgroundColor] = useState('#222222');
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
      <div className="App">
        <Header />
        <Hero />
        <About />
      </div>
  );
}

export default App;
