import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../api';

const Home = () => {
    const navigate = useNavigate();
    const [bags, setBags] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                // Depending on the API response structure, it might be response.data or response.data.results
                setBags(response.data.results || response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="bg-rony-stone min-h-screen">
            <section className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh] text-rony-text text-center p-4 md:p-8">
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

            <section className="py-8 md:py-12 lg:py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-rony-navy mb-8 md:mb-12 text-center">Featured Collection</h2>
                {loading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rony-navy"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {bags.map((bag) => (
                            <div
                                key={bag.id}
                                className="group bg-rony-light border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-rony-orange cursor-pointer"
                                onClick={() => navigate(`/product/${bag.id}`)}
                            >
                            <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img
                                    src={bag.image}
                                    alt={bag.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4 md:p-6">
                                <div className="text-xs font-semibold text-rony-orange mb-2 uppercase tracking-wider">{bag.category?.name || bag.category}</div>
                                <h3 className="text-lg md:text-xl font-bold text-rony-navy mb-2">{bag.name}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-xl md:text-2xl font-bold text-rony-navy">{bag.price}</span>
                                    <span className="text-xs md:text-sm text-rony-text group-hover:text-rony-navy transition-colors">View Details →</span>
                                </div>
                            </div>
                        </div>
                    ))}
                )}
            </section>
        </div>
    );
};

export default Home;
