import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-100 border-t'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Zawadi Decor</h3>
            <p className='text-gray-600'>Beautifully crafted decorations and gifts for every occasion.</p>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li><Link to='/' className='text-gray-600 hover:text-amber-600'>Home</Link></li>
              <li><Link to='/products' className='text-gray-600 hover:text-amber-600'>Products</Link></li>
              <li><Link to='/about' className='text-gray-600 hover:text-amber-600'>About Us</Link></li>
              <li><Link to='/contact' className='text-gray-600 hover:text-amber-600'>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Follow Us</h4>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-600 hover:text-amber-600'><Facebook size={24} /></a>
              <a href='#' className='text-gray-600 hover:text-amber-600'><Instagram size={24} /></a>
              <a href='#' className='text-gray-600 hover:text-amber-600'><Twitter size={24} /></a>
            </div>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Newsletter</h4>
            <p className='text-gray-600 mb-2'>Subscribe for updates and special offers.</p>
            <form className='flex'>
              <input type='email' placeholder='Your email' className='w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500' />
              <button className='bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className='text-center text-gray-500 mt-8 border-t pt-6'>
          <p>&copy; 2025 Zawadi Decor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}