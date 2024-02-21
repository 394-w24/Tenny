import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from "./components/Banner.jsx";
import ChatPage from './components/ChatPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import ServicePage from "./components/ServicePage.jsx";
import ServiceDetailPage from "./components/ServiceDetailPage.jsx"; // Import your new component
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Banner/>
      <Routes>
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} /> {/* Add this line */}
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
