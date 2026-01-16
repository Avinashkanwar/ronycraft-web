import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/assets/ronycraft_logo.jpg';
import { bags, categories } from '../../src/data/bags';

const Home = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBags = bags.filter(bag => {
        const matchesCategory = activeCategory === 'all' || bag.category === activeCategory;
        const matchesSearch = bag.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bag.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });



    return (
        <div className="bg-rony-stone min-h-screen font-sans text-rony-text">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-rony-stone/95 backdrop-blur-md px-4 md:px-8 lg:px-12 py-4 flex justify-between items-center border-b border-gray-300">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="RonyCraft Logo" className="h-10 w-auto rounded-full" />
                    <div className="flex flex-col">
                        <span className="font-bold text-xl tracking-tight text-rony-navy leading-tight">RonyCraft</span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wide hidden sm:block">Carry Your World With Style</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/about')}
                        className="text-rony-navy font-medium hover:text-rony-orange transition-colors text-sm"
                    >
                        About
                    </button>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-rony-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </header>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Left Section - Categories */}
                    <div className="lg:col-span-2 hidden lg:block space-y-1 lg:pl-2 mt-24">
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">Categories</h2>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex justify-between items-center ${activeCategory === cat.id
                                    ? 'bg-rony-navy text-white'
                                    : 'text-gray-600 hover:bg-white hover:text-rony-navy'
                                    }`}
                            >
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Center Section - Search & Products */}
                    <div className="lg:col-span-9 space-y-6">
                        {/* Search Input - Mobile Only (Moved Top) */}
                        <div className="relative group max-w-md mx-auto lg:hidden mb-8">
                            <input
                                type="text"
                                placeholder="Search for bags..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-full border-none bg-white focus:ring-2 focus:ring-rony-navy/10 outline-none transition-all text-sm shadow-sm"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-rony-navy transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <div className="text-center mb-12 relative">
                            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>
                            <span className="bg-rony-stone px-4 text-xs font-bold text-rony-orange uppercase tracking-[0.2em] mb-2 inline-block">Premium Collection</span>
                            <h1 className="text-3xl md:text-4xl font-bold text-rony-navy mb-3 tracking-tight">
                                RonyCraft  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rony-navy to-rony-orange">Carry Your World</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                                Discover our curated selection of premium bags, designed for the modern adventurer and professional.
                            </p>
                        </div>

                        {/* Mobile Category Filter */}
                        <div className="lg:hidden overflow-x-auto pb-2">
                            <div className="flex gap-2 min-w-max">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat.id
                                            ? 'bg-rony-navy text-white'
                                            : 'bg-white text-gray-600'
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Bags Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-8">
                            {filteredBags.map((bag) => (
                                <div
                                    key={bag.id}
                                    className="group cursor-pointer flex flex-col"
                                    onClick={() => navigate(`/bag/${bag.id}`)}
                                >
                                    <div className="relative aspect-square overflow-hidden bg-[#F5F5F5] mb-3 rounded-2xl group-hover:shadow-lg transition-all duration-500">
                                        {bag.originalPrice && (
                                            <div className="absolute top-0 left-0 z-10 bg-[#D93F3F] text-white px-2 py-1 text-[10px] font-bold">
                                                SALE
                                            </div>
                                        )}

                                        {/* Combo Card Layout */}
                                        {bag.category === 'Combo' && bag.images && bag.images.length > 1 ? (
                                            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5">
                                                {bag.images.slice(0, 4).map((img, index) => (
                                                    <div key={index} className={`relative overflow-hidden ${bag.images.length === 2 ? 'row-span-2' : ''} ${bag.images.length === 3 && index === 0 ? 'row-span-2' : ''}`}>
                                                        <img
                                                            src={img}
                                                            alt={`${bag.name} ${index + 1}`}
                                                            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            /* Standard Card Layout */
                                            <img
                                                src={bag.image}
                                                alt={bag.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                                            />
                                        )}

                                        {/* Quick Action Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                                            <button className="bg-white/90 backdrop-blur-sm text-rony-navy px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-rony-navy hover:text-white transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-start">
                                            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                                                {bag.category}
                                            </p>
                                            {bag.rating && (
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="text-xs font-bold text-gray-700">{bag.rating}</span>
                                                    <span className="text-[10px] text-gray-400">({bag.reviews})</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-sm font-bold text-gray-800 leading-tight group-hover:text-rony-navy transition-colors line-clamp-2">
                                                {bag.name}
                                            </h3>
                                            <div className="flex flex-col items-end shrink-0">
                                                <span className="text-sm font-bold text-[#D93F3F]">{bag.price}</span>
                                                {bag.originalPrice && (
                                                    <span className="text-[10px] text-gray-400 line-through">{bag.originalPrice}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredBags.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-rony-navy">No bags found</h3>
                                <button
                                    onClick={() => {
                                        setActiveCategory('all');
                                        setSearchQuery('');
                                    }}
                                    className="mt-4 text-rony-orange text-sm font-medium hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Section - Empty for balance */}
                    <div className="lg:col-span-1 hidden lg:block"></div>
                </div>






            </div>
        </div>
    );
};

export default Home;
