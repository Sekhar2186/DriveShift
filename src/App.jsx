import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import SiteLayout from './components/layout/SiteLayout.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import HomePage from './components/pages/HomePage.jsx';
import ModelsPage from './components/pages/ModelsPage.jsx';
import ServicePage from './components/pages/ServicePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
