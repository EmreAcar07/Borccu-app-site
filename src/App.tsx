import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import KVKK from "./pages/KVKK";
import Disclaimer from "./pages/Disclaimer";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/kvkk" element={<KVKK />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
