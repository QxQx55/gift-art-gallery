import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

export default function App() {
  return (
    <Router>
      <div className='bg-white text-gray-800'>
        <Toaster richColors />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}