import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import ServicePage from "./components/ServicePage.jsx";
import Banner from "./components/Banner.jsx";
import TopBanner from "./components/TopBanner.jsx"; // Import the new TopBanner component
import ChatPage from './components/ChatPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import ServiceDescription from './components/ServiceDescription.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileUpdate from './components/ProfileUpdate.jsx';
import Schedule from './components/Schedule.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Banner/>
      <TopBanner/>
      <Routes>
        <Route path="/" element={<ServicePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/serviceDescription/:id" element={<ServiceDescription/>} />
        <Route path="/myprofile" element={<ProfileUpdate/>} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
