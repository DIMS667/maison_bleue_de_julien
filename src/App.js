import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Autisme from './pages/Autisme';
import Actualite from './pages/Actualite';
import ContactPage from './pages/ContactPage';
import JulienPage from './pages/JulienPage';
import Don from './pages/Don';
import MbjPage from './pages/MbjPage';
import Adherer from './pages/Adherer';
import DonSuccess from './pages/DonSuccess';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/autisme" element={<Autisme />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/don" element={<Don />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/julien" element={<JulienPage />} />
          <Route path="/mbj" element={<MbjPage />} />
          <Route path="/adherer" element={<Adherer />} />
          <Route path="/don-success" element={<DonSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
