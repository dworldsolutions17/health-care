import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems => {
      const newItems = prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 150 : 0;
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      alert('Order placed successfully! Thank you for your purchase.');
      localStorage.removeItem('cart');
      setCartItems([]);
      setIsProcessing(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart & Checkout</h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some products to your cart to continue shopping</p>
              <Link to="/ecommerce" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition font-semibold">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-primary-600">Rs. {item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary & Checkout Form */}
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>Rs. {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>Rs. {shipping.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (5%)</span>
                      <span>Rs. {tax.toFixed(0)}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span>Rs. {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Form */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout Details</h2>
                  
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                        placeholder="+92 300 1234567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Address</label>
                      <textarea
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                        placeholder="Complete shipping address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                      >
                        <option value="">Select payment method</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="bank">Bank Transfer</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className={`w-full py-4 rounded-lg font-bold text-white transition ${
                        isProcessing
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700'
                      }`}
                    >
                      {isProcessing ? 'Processing...' : `Place Order - Rs. ${total.toLocaleString()}`}
                    </button>
                  </form>
                </div>

                <Link to="/ecommerce" className="block text-center text-primary-600 hover:text-primary-700 font-semibold">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
