import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
