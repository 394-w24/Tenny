import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MapPage from './components/Mappage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Banner />
      <MapPage />
    </div>
  );
};

export default App;
