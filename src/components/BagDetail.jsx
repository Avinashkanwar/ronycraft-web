import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { bags } from '../data/bags';
import logo from '../../src/assets/ronycraft_logo.jpg';

const BagDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, bookNow } = useCart();
    const [notification, setNotification] = useState('');

    // Find the bag from the centralized data
    const bag = bags.find(b => b.id === parseInt(id)) || bags[0];

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 3000);
    };

    const handleAddToCart = () => {
        addToCart(bag);
        navigate('/shipping', { state: { bag } });
    };

    const handleBookNow = () => {
        navigate('/shipping', { state: { bag } });
    };

    return (
        <div className="bg-white min-h-screen font-sans text-rony-text">
            {/* Notification Toast */}
            {notification && (
                <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
                    {notification}
                </div>
            )}

            {/* Simple Header with Logo Left */}
            <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="RonyCraft" className="h-8 w-auto rounded-full" />
                        <span className="font-bold text-lg text-rony-navy">RonyCraft</span>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-rony-navy transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back
                    </button>
                </div>
            </nav>

            <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Images */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                            <img
                                src={bag.images[0]}
                                alt={bag.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {bag.images.map((img, idx) => (
                                <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:opacity-80 transition-opacity">
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-2">
                            <span className="text-rony-orange font-semibold tracking-wider uppercase text-sm">{bag.category}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-rony-navy mb-4">{bag.name}</h1>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-rony-navy">{bag.price}</span>
                                {bag.originalPrice && (
                                    <span className="text-xl text-gray-400 line-through decoration-gray-400">{bag.originalPrice}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-1 text-yellow-500">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                <span className="text-gray-400 text-sm ml-1">({bag.reviews} reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {bag.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="font-bold text-rony-navy mb-3">Key Features</h3>
                            <ul className="space-y-2">
                                {bag.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                                        <svg className="h-5 w-5 text-rony-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-rony-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={handleBookNow}
                                className="flex-1 border-2 border-rony-orange text-rony-orange py-4 rounded-xl font-bold text-lg hover:bg-rony-orange hover:text-white transition-all shadow-lg hover:shadow-xl cursor-pointer"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BagDetail;
