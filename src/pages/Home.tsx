import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/ac27b297-5e0c-4079-a465-8e398ec6854c/hero-banner-mpnoucy-1765126523467.webp')` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Elegance in Every Detail
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            >
              Discover unique, hand-crafted decorations and gifts that bring a touch of African-inspired beauty to your home.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
              <Link 
                to="/products"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
              >
                Shop Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Link to="/products">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/products" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                View All Products
            </Link>
        </div>
      </section>

      {/* About Us Snippet */}
       <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
            At Zawadi Decor, we believe your home should tell a story. We source and create beautiful, high-quality decorative items inspired by the rich cultural heritage of Africa, designed for the modern home.
          </p>
          <Link to="/about" className="text-amber-600 hover:text-amber-700 font-bold text-lg">
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}