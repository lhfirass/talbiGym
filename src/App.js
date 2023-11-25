import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [aBackgroundColor, setBackgroundColor] = useState('#222222');
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
      <div className="App">

      </div>
  );
}

export default App;
