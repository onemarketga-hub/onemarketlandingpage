import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* About Section */}
          <div>
            <div className='flex items-center space-x-2 mb-4'>
              <img
                src='/assets/logo.jpeg'
                alt='OneMarket Logo'
                className='h-10 w-10 rounded-lg object-cover'
              />
              <span className='text-xl font-bold'>OneMarket</span>
            </div>
            <p className='text-gray-300 text-sm leading-relaxed'>
              {language === 'fr'
                ? 'Votre Marché de Services Locaux de Confiance'
                : 'Your Trusted Local Services Marketplace'}
            </p>
            <div className='mt-4 flex items-center gap-2 text-sm text-gray-400'>
              <span>
                1000+ {language === 'fr' ? 'Prestataires' : 'Providers'}
              </span>
              <span>•</span>
              <span>50+ {language === 'fr' ? 'Services' : 'Services'}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className='text-lg font-bold mb-4'>
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-300 hover:text-white text-sm transition-colors'
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-300 hover:text-white text-sm transition-colors'
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-300 hover:text-white text-sm transition-colors'
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-bold mb-4'>
              {language === 'fr' ? 'Contact' : 'Contact'}
            </h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='mailto:info@onemarket.ga'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  info@onemarket.ga
                </a>
              </li>
              <li>
                <a
                  href='tel:+241077854048'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  +241 077 854 048
                </a>
              </li>
              <li className='text-gray-300'>Libreville, Gabon</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className='mt-8 pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex gap-4'>
              <a
                href='https://www.facebook.com/share/17HSQWdnPF/?mibextid=wwXIfr'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition-colors'
                aria-label='Facebook'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/onemarketga/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white transition-colors'
                aria-label='Instagram'
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z' />
                  <path d='M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm7.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' />
                </svg>
              </a>
            </div>

            <p className='text-gray-400 text-sm'>
              {language === 'fr'
                ? 'Fait avec amour au Gabon ❤️'
                : 'Made with love in Gabon ❤️'}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 text-center'>
          <p className='text-gray-400 text-sm'>
            &copy; {currentYear} OneMarket.{' '}
            {language === 'fr'
              ? 'Tous droits réservés.'
              : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
