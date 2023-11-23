import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [aBackgroundColor, setBackgroundColor] = useState('#222222');
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
      <div className="App">
        <p>hello world</p>
      </div>
  );
}

export default App;
