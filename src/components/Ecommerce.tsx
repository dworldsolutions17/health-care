import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Ecommerce = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Blood Pressure Monitor',
      category: 'devices',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=400',
      description: 'Digital blood pressure monitor with automatic readings',
      rating: 4.5,
      inStock: true
    },
    {
      id: 2,
      name: 'Digital Thermometer',
      category: 'devices',
      price: 899,
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=400',
      description: 'Fast and accurate digital thermometer',
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: 'Pulse Oximeter',
      category: 'devices',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=400',
      description: 'Finger pulse oximeter for oxygen saturation monitoring',
      rating: 4.6,
      inStock: true
    },
    {
      id: 4,
      name: 'Organic Honey',
      category: 'food',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784010?q=80&w=400',
      description: 'Pure organic honey from local farms',
      rating: 4.9,
      inStock: true
    },
    {
      id: 5,
      name: 'Organic Nuts Mix',
      category: 'food',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=400',
      description: 'Premium quality mixed nuts',
      rating: 4.7,
      inStock: true
    },
    {
      id: 6,
      name: 'Green Tea',
      category: 'food',
      price: 800,
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=400',
      description: 'Premium organic green tea leaves',
      rating: 4.6,
      inStock: true
    },
    {
      id: 7,
      name: 'First Aid Kit',
      category: 'devices',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=400',
      description: 'Complete first aid kit for home and travel',
      rating: 4.8,
      inStock: true
    },
    {
      id: 8,
      name: 'Organic Olive Oil',
      category: 'food',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400',
      description: 'Extra virgin organic olive oil',
      rating: 4.9,
      inStock: false
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: typeof products[0]) => {
    // Get existing cart from localStorage
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex((item: CartItem) => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // Increase quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // Add new item
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show success message and navigate
    alert(`${product.name} added to cart!`);
    navigate('/checkout');
  };

  return (
    <section id="ecommerce" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health Store
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality health devices and organic products delivered to your doorstep
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedCategory('devices')}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              selectedCategory === 'devices'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Health Devices
          </button>
          <button
            onClick={() => setSelectedCategory('food')}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              selectedCategory === 'food'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Organic Food
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Out of Stock
                  </div>
                )}
                {product.inStock && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    In Stock
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`} 
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary-600">
                    Rs. {product.price.toLocaleString()}
                  </div>
                  <button 
                    disabled={!product.inStock}
                    onClick={() => product.inStock && addToCart(product)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      product.inStock
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Checkout</h3>
            <p className="text-gray-600">Safe and encrypted payment options for your peace of mind</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable delivery to your location</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">100% authentic and certified products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
