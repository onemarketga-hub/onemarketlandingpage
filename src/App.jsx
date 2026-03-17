import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PaymentPolicy from './pages/PaymentPolicy';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="payment-policy" element={<PaymentPolicy />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
