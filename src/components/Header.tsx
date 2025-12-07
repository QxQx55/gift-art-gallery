import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <Link to='/' className='text-3xl font-bold text-gray-800'>
            Zawadi Decor
          </Link>

          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-amber-600 ${isActive ? 'text-amber-600' : 'text-gray-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-600 hover:text-amber-600'>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='md:hidden bg-white border-t border-gray-200'
        >
          <nav className='flex flex-col items-center space-y-4 py-4'>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-amber-600 ${isActive ? 'text-amber-600' : 'text-gray-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}