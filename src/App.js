import { useState } from 'react';
import './App.css';
import Control from './components/Control/Control';
import Guitarist from './components/Guitarist/Guitarist';

function App() {
  const [anim, setAnim] = useState(false)
  return (
    <div className="App">
      <Guitarist anim={anim}/>
      <Control animate={setAnim}/>
    </div>
  );
}

export default App;
