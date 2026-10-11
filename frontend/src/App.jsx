import { Routes, Route } from 'react-router-dom';
import StarField from './components/StarField.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import EventDetail from './pages/EventDetail.jsx';
import { Footer } from './sections/Static.jsx';

export default function App() {
  return (
    <>
      <StarField />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
