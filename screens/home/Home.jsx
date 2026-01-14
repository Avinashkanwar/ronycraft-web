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
            <header className="sticky top-0 z-50 bg-rony-stone/95 backdrop-blur-md px-4 md:px-8 lg:px-12 py-4 flex justify-between items-center border-b border-gray-200/50 shadow-sm">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="RonyCraft Logo" className="h-10 w-auto rounded-full" />
                    <div className="flex flex-col">
                        <span className="font-bold text-xl tracking-tight text-rony-navy leading-tight">RonyCraft</span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wide hidden sm:block">Handcrafted excellence</span>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-rony-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                    Login
                </button>
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
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-rony-navy mb-2">Welcome to RonyCraft</h1>
                            <p className="text-gray-500 text-sm">Discover our handcrafted collection</p>
                        </div>
                        {/* Search Input */}
                        <div className="relative group max-w-md mx-auto">
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
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {filteredBags.map((bag) => (
                                <div
                                    key={bag.id}
                                    className="group cursor-pointer bg-white rounded-xl p-2 transition-all duration-300"
                                    onClick={() => navigate(`/bag/${bag.id}`)}
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 mb-3">
                                        {bag.originalPrice && (
                                            <div className="absolute top-2 right-2 z-10 bg-red-500 text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
                                                Sale
                                            </div>
                                        )}
                                        <img
                                            src={bag.image}
                                            alt={bag.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="px-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-sm font-bold text-rony-navy group-hover:text-rony-orange transition-colors line-clamp-1">
                                                {bag.name}
                                            </h3>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="font-bold text-rony-navy text-lg">{bag.price}</span>
                                            {bag.originalPrice && (
                                                <span className="text-xs text-gray-400 line-through decoration-gray-400">{bag.originalPrice}</span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500">{bag.category}</p>
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
