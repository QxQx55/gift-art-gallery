import { motion } from 'framer-motion';
import { Award, Feather, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold">About Zawadi Decor</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Celebrating artistry, culture, and the beauty of home.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
           >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ac27b297-5e0c-4079-a465-8e398ec6854c/product-baskets-ofaofx7-1765126542605.webp"
              alt="Craftsmanship"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
           </motion.div>
           <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
           >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our mission is to bring the soul of African craftsmanship into the modern home. We partner with talented artisans across the continent to curate a collection of unique, high-quality decor that tells a story of heritage and passion.
            </p>
            <p className="text-gray-700 text-lg">
              We believe that a beautiful home is a happy home, and our pieces are designed to inspire joy, warmth, and a connection to a rich cultural tapestry.
            </p>
           </motion.div>
        </div>

        <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <div className="bg-amber-100 inline-block p-4 rounded-full mb-4">
                        <Award size={32} className="text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Authentic Quality</h3>
                    <p className="text-gray-600">Every item is genuinely sourced and handcrafted, ensuring you receive a piece of authentic artistry.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    <div className="bg-green-100 inline-block p-4 rounded-full mb-4">
                        <Feather size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Unique Designs</h3>
                    <p className="text-gray-600">Our curated collection features exclusive designs you won\'t find anywhere else, perfect for a distinctive home style.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    <div className="bg-red-100 inline-block p-4 rounded-full mb-4">
                        <Heart size={32} className="text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ethical Sourcing</h3>
                    <p className="text-gray-600">We are committed to fair trade practices, supporting artisan communities and preserving traditional crafts.</p>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}