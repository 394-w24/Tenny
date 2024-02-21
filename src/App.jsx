import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import servicePage from './components/servicePage';
import Banner from './components/Banner.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default App;
