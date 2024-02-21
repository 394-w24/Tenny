import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ServicePage from "./components/ServicePage.jsx";
import Banner from "./components/Banner.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Banner></Banner>
      <ServicePage/>
    </div>
  );
};

export default App;
