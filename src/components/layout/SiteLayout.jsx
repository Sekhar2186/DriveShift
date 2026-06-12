import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';

function SiteLayout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;
