import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MapPage from './components/Mappage';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div >
      <MapPage />
    </div>
  );
};

export default App;
