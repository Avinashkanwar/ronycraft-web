import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/assets/ronycraft_logo.jpg';

const Home = () => {
    const navigate = useNavigate();

    const bags = [
        {
            id: 1,
            name: "Tourist Pro Elite",
            price: "$159.99",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Travel"
        },
        {
            id: 2,
            name: "Urban Minimalist",
            price: "$79.99",
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Daily Carry"
        },
        {
            id: 3,
            name: "Adventure Rucksack",
            price: "$129.99",
            image: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Outdoor"
        },
        {
            id: 4,
            name: "Leather Messenger",
            price: "$189.99",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Professional"
        },
        {
            id: 5,
            name: "Weekend Duffle",
            price: "$119.99",
            image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Travel"
        },
        {
            id: 6,
            name: "Tech Backpack",
            price: "$99.99",
            image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Tech"
        }
    ];

    return (
        <div className="bg-rony-stone min-h-screen relative">
            {/* Logo in top-left corner */}
            <div className="absolute top-4 left-4 md:top-6 md:left-8 z-10">
                <img src={logo} alt="RonyCraft Logo" className="h-12 md:h-16 w-auto drop-shadow-lg" />
            </div>

            {/* Login button in top-right corner */}
            <div className="absolute top-4 right-4 md:top-6 md:right-8 z-10">
                <button
                    onClick={() => navigate('/login')}
                    className="bg-rony-navy border border-rony-navy text-white px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                    Login
                </button>
            </div>

            <section className="flex flex-col items-center justify-center min-h-[40vh] md:min-h-[45vh] text-rony-text text-center px-4 md:px-8 pt-16 md:pt-12 pb-4">
                <div className="hero max-w-4xl mx-auto w-full">
                    <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 font-bold tracking-tight text-rony-navy">
                        Welcome to RonyCraft
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-rony-text font-light tracking-wide px-4">
                        Premium bag company delivering elegance and durability.
                    </p>
                    <button className="bg-rony-navy border-none text-white px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-lg shadow-md">
                        Explore Our Collection
                    </button>
                </div>
            </section>

            <section className="py-6 md:py-8 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-rony-navy mb-6 md:mb-8 text-center">Featured Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {bags.map((bag) => (
                        <div
                            key={bag.id}
                            className="group bg-rony-light border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-rony-orange"
                        >
                            <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img
                                    src={bag.image}
                                    alt={bag.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4 md:p-6">
                                <div className="text-xs font-semibold text-rony-orange mb-2 uppercase tracking-wider">{bag.category}</div>
                                <h3 className="text-lg md:text-xl font-bold text-rony-navy mb-2">{bag.name}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xl md:text-2xl font-bold text-rony-navy">{bag.price}</span>
                                    <span className="text-xs md:text-sm text-rony-text group-hover:text-rony-navy transition-colors">View Details →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
