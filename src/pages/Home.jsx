import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const bags = [
        {
            id: 1,
            name: "The Executive",
            price: "$129.99",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Business"
        },
        {
            id: 2,
            name: "Urban Explorer",
            price: "$89.99",
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Casual"
        },
        {
            id: 3,
            name: "Weekend Getaway",
            price: "$149.99",
            image: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Travel"
        }
    ];

    const handleCardClick = () => {
        navigate('/signup');
    };

    return (
        <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen">
            <section className="flex flex-col items-center justify-center min-h-[60vh] text-white text-center p-8">
                <div className="hero max-w-4xl mx-auto">
                    <h1 className="font-sans text-6xl mb-4 font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Welcome to RonyCraft
                    </h1>
                    <p className="text-xl mb-8 opacity-90 font-light tracking-wide">
                        Premium bag company delivering elegance and durability.
                    </p>
                    <button className="bg-[#ff6b6b] border-none text-white px-8 py-3 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-[#ff5252] hover:-translate-y-1 hover:shadow-lg shadow-md">
                        Explore Our Collection
                    </button>
                </div>
            </section>

            <section className="py-16 px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bags.map((bag) => (
                        <div
                            key={bag.id}
                            onClick={handleCardClick}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#ff6b6b]/50"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={bag.image}
                                    alt={bag.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-medium text-[#ff6b6b] mb-2 uppercase tracking-wider">{bag.category}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{bag.name}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-white">{bag.price}</span>
                                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">View Details →</span>
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
