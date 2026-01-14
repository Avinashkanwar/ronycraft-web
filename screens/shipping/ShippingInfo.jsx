import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../src/assets/ronycraft_logo.jpg';

const ShippingInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bagData = location.state?.bag || null;

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'India'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show success message
        alert('Order placed successfully! We will contact you soon.');
        navigate('/');
    };

    return (
        <div className="bg-rony-stone min-h-screen">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-3">
                            <img src={logo} alt="RonyCraft Logo" className="h-10 w-auto rounded-full" />
                            <span className="font-bold text-xl tracking-tight text-rony-navy">RonyCraft</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/login')}
                                className="text-rony-navy hover:text-rony-orange transition-colors font-medium text-sm"
                            >
                                Already have an account? Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-rony-navy mb-2">
                            Shipping Information
                        </h1>
                        <p className="text-gray-600">
                            Please provide your shipping details to complete your order
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Shipping Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-rony-navy mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-rony-navy mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-rony-navy mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <label className="block text-sm font-medium text-rony-navy mb-2">
                                            Street Address *
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                            placeholder="123 Main Street, Apartment 4B"
                                        />
                                    </div>

                                    {/* City, State, ZIP */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-rony-navy mb-2">
                                                City *
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                                placeholder="Mumbai"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-rony-navy mb-2">
                                                State *
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                required
                                                value={formData.state}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                                placeholder="Maharashtra"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-rony-navy mb-2">
                                                ZIP Code *
                                            </label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                required
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                                placeholder="400001"
                                            />
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="block text-sm font-medium text-rony-navy mb-2">
                                            Country *
                                        </label>
                                        <select
                                            name="country"
                                            required
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy"
                                        >
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Australia">Australia</option>
                                        </select>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-rony-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                                        >
                                            Place Order
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => navigate(-1)}
                                            className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all"
                                        >
                                            Go Back
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-24">
                                <h3 className="text-lg font-bold text-rony-navy mb-4">Order Summary</h3>

                                {bagData ? (
                                    <>
                                        <div className="mb-4">
                                            <img
                                                src={bagData.image}
                                                alt={bagData.name}
                                                className="w-full h-32 object-cover rounded-lg mb-3"
                                            />
                                            <h4 className="font-bold text-rony-navy">{bagData.name}</h4>
                                            <p className="text-sm text-gray-500 mt-1">{bagData.category}</p>
                                        </div>
                                        <div className="border-t border-gray-200 pt-4 space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Price</span>
                                                <span className="font-medium">{bagData.price}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Shipping</span>
                                                <span className="font-medium text-green-600">Free</span>
                                            </div>
                                            <div className="border-t border-gray-200 pt-2 mt-2">
                                                <div className="flex justify-between">
                                                    <span className="font-bold text-rony-navy">Total</span>
                                                    <span className="font-bold text-rony-navy text-lg">{bagData.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-gray-500 text-sm">No item selected</p>
                                )}

                                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-green-800">Free Shipping</p>
                                            <p className="text-xs text-green-600 mt-1">Delivery in 3-5 business days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;
