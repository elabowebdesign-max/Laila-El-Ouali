import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Specializations from './pages/Specializations';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="specializations" element={<Specializations />} />
        <Route path="articles" element={<Articles />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
