import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import MetaPage from './pages/MetaPage';
import AboutPage from './pages/AboutPage';
import GameplayPage from './pages/GameplayPage';
import ContactPage from './pages/ContactPage';
import WhatsAppPage from './pages/WhatsAppPage';
import MentoriaPage from './pages/MentoriaPage';
import PDFsPage from './pages/PDFsPage';
import PlayWithMePage from './pages/PlayWithMePage';
import BoostPage from './pages/BoostPage';
import ContasPage from './pages/ContasPage';
import BoostBehaviorPage from './pages/BoostBehaviorPage';
import LowPriorityPage from './pages/LowPriorityPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import HeroDetailPage from './pages/HeroDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  useEffect(() => {
    document.title = "Ericking | Criador de conteúdo";
    
    // Atualizar favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'https://i.imgur.com/SmLTQ7T.png';
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meta" element={<MetaPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/whatsapp" element={<WhatsAppPage />} />
          <Route path="/estilo" element={<GameplayPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/mentoria" element={<MentoriaPage />} />
          <Route path="/pdfs" element={<PDFsPage />} />
          <Route path="/play" element={<PlayWithMePage />} />
          <Route path="/boost" element={<BoostPage />} />
          <Route path="/contas" element={<ContasPage />} />
          <Route path="/boost-behavior" element={<BoostBehaviorPage />} />
          <Route path="/low-priority" element={<LowPriorityPage />} />
          <Route path="/checkout/:productId" element={<CheckoutPage />} />
          <Route path="/pagamento" element={<PaymentPage />} />
          <Route path="/hero/:heroSlug" element={<HeroDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;