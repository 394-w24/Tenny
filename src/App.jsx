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
  const [favor_coord, setFavor_coord] = useState([41.8, -87.6]);
  return (
    <div>
      <Banner favor_coord={favor_coord} setFavor_coord={setFavor_coord}/>
      <MapPage favor_coord={favor_coord} setFavor_coord={setFavor_coord}/>
    </div>
  );
};

export default App;
