import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg'; // If you're using this, keep it; otherwise, it can be removed.
import './App.css';
import ServicePage from "./components/ServicePage.jsx";
import Banner from "./components/Banner.jsx";
import ChatPage from './components/ChatPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [count, setCount] = useState(0); // If you're using this state, keep it; otherwise, it can be removed.

  return (
    <BrowserRouter>
      <Banner/>
      <Routes>
        <Route path="/service" element={<ServicePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
