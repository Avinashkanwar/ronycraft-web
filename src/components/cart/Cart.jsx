import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/ronycraft_logo.jpg';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    const handleCheckout = () => {
        navigate('/shipping');
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
                            className="relative p-2 text-rony-navy hover:text-rony-orange transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-rony-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            <div className="pt-32 pb-16 px-4 max-w-6xl mx-auto">
                {/* Cart Heading */}
                <h1 className="text-5xl font-serif text-gray-900 mb-8">Cart</h1>

                {/* Progress Steps */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">1. Cart</span>
                    </div>
                    <div className="h-px w-12 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">2. Checkout</span>
                    </div>
                    <div className="h-px w-12 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">3. Payment</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white border-b border-gray-200 pb-4">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-base font-semibold text-gray-900 mb-0.5">{item.name}</h3>
                                        <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs text-gray-600">Size <span className="font-semibold">XL</span></span>
                                            <span className="text-xs text-gray-600">Color <span className="font-semibold">Marron</span></span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <p className="text-lg font-bold text-gray-900">{item.price}</p>
                                                {item.originalPrice && (
                                                    <p className="text-xs text-gray-400 line-through">{item.originalPrice}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center border border-gray-300 rounded">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-2 py-0.5 hover:bg-gray-50 transition-colors text-sm"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="px-3 py-0.5 border-x border-gray-300 text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 py-0.5 hover:bg-gray-50 transition-colors text-sm"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                                <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Sub Total</span>
                                    <span className="font-semibold text-gray-900">${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Discount</span>
                                    <span className="font-semibold text-gray-900">$0.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-semibold text-gray-900">${(getCartTotal() * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold text-orange-500">Free</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-900">Total</span>
                                        <span className="font-bold text-xl text-gray-900">${(getCartTotal() * 1.1).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-6"
                            >
                                Proceed to Checkout
                            </button>

                            <div className="text-center text-sm text-gray-500 mb-4">
                                Estimated Delivery by <span className="font-semibold">25 April, 2022</span>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <p className="text-sm font-semibold text-gray-900 mb-3">Have a Coupon?</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Coupon Code"
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
                                    />
                                    <button className="px-4 py-2 text-orange-500 font-semibold text-sm hover:text-orange-600">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
