import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Portfolio from './pages/Portfolio';
import Industries from './pages/Industries';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

// Location Pages
import BangaloreLocation from './pages/locations/BangaloreLocation';

// Service Pages
import WebDevelopment from './pages/services/WebDevelopment';
import SEOPage from './pages/services/SEOPage';
import LeadGeneration from './pages/services/LeadGeneration';
import AIChatbots from './pages/services/AIChatbots';
import AIVoiceReceptionist from './pages/services/AIVoiceReceptionist';
import BusinessAutomation from './pages/services/BusinessAutomation';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/seo" element={<SEOPage />} />
              <Route path="/services/lead-generation" element={<LeadGeneration />} />
              <Route path="/services/ai-chatbots" element={<AIChatbots />} />
              <Route path="/services/ai-voice-receptionist" element={<AIVoiceReceptionist />} />
              <Route path="/services/business-automation" element={<BusinessAutomation />} />
              
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/industries" element={<Industries />} />
              
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              <Route path="/locations/bangalore" element={<BangaloreLocation />} />
              
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              
              {/* Catch-all Wildcard Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

