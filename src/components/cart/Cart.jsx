import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/ronycraft_logo.jpg';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    const handleCheckout = () => {
        alert('Proceeding to checkout...');
        // In a real app, this would navigate to a checkout page
    };

    if (cartItems.length === 0) {
        return (
            <div className="bg-rony-stone min-h-screen">
                < nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200" >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            <div className="flex-shrink-0 flex items-center gap-3">
                                <img src={logo} alt="RonyCraft Logo" className="h-10 w-auto rounded-full" />
                                <span className="font-bold text-xl tracking-tight text-rony-navy">RonyCraft</span>
                            </div>
                            <button
                                onClick={() => navigate('/')}
                                className="text-rony-navy hover:text-rony-orange transition-colors font-medium"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </nav >

                <div className="pt-32 pb-16 px-4 text-center">
                    <div className="max-w-md mx-auto">
                        <svg className="mx-auto h-24 w-24 text-gray-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <h2 className="text-3xl font-bold text-rony-navy mb-4">Your Cart is Empty</h2>
                        <p className="text-gray-600 mb-8">Start adding some amazing bags to your cart!</p>
                        <button
                            onClick={() => navigate('/')}
                            className="bg-rony-navy text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg"
                        >
                            Browse Collection
                        </button>
                    </div>
                </div>
            </div >
        );
    }

    return (
        <div className="bg-rony-stone min-h-screen">
            <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <img src={logo} alt="RonyCraft Logo" className="h-10 w-auto rounded-full" />
                            <span className="font-bold text-xl tracking-tight text-rony-navy">RonyCraft</span>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="text-rony-navy hover:text-rony-orange transition-colors font-medium"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-rony-navy mb-2">Shopping Cart</h1>
                    <p className="text-gray-600">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-32 h-32 object-cover rounded-xl"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between mb-2">
                                            <div>
                                                <p className="text-xs font-semibold text-rony-orange uppercase tracking-wider mb-1">{item.category}</p>
                                                <h3 className="text-xl font-bold text-rony-navy">{item.name}</h3>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-2xl font-bold text-rony-navy mb-4">{item.price}</p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    −
                                                </button>
                                                <span className="px-6 py-2 font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="text-gray-600">
                                                Subtotal: <span className="font-bold text-rony-navy">
                                                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                            <h2 className="text-2xl font-bold text-rony-navy mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-medium text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (Estimated)</span>
                                    <span className="font-medium">${(getCartTotal() * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between text-xl font-bold text-rony-navy">
                                        <span>Total</span>
                                        <span>${(getCartTotal() * 1.1).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-rony-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl mb-3"
                            >
                                Proceed to Checkout
                            </button>
                            <button
                                onClick={clearCart}
                                className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
