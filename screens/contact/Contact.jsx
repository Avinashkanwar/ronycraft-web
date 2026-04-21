import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/assets/ronycraft_logo.jpg';
import { categories } from '../../src/data/bags';

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-rony-stone min-h-screen font-sans text-rony-text">
            <header className="sticky top-0 z-50 bg-rony-stone/95 backdrop-blur-md px-4 md:px-8 lg:px-12 py-4 flex justify-between items-center border-b border-gray-200/50 shadow-sm">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <img src={logo} alt="RonyCraft Logo" className="h-10 w-auto rounded-full" />
                    <div className="flex flex-col">
                        <span className="font-bold text-xl tracking-tight text-rony-navy leading-tight">RonyCraft</span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wide hidden sm:block">Handcrafted excellence</span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-8 mr-4">
                        <button onClick={() => navigate('/')} className="text-sm font-medium text-gray-600 hover:text-rony-navy transition-colors cursor-pointer">Home</button>
                        <button onClick={() => navigate('/')} className="text-sm font-medium text-gray-600 hover:text-rony-navy transition-colors cursor-pointer">Categories</button>
                    </nav>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-rony-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="space-y-10">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-rony-navy mb-6 tracking-tight">Connect with<br />RonyCraft</h1>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                Have a question or need a custom design? We're here to help you find the perfect handcrafted piece.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-rony-navy">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-gray-600 font-medium">hello@ronycraft.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-rony-navy">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <span className="text-gray-600 font-medium">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-rony-navy">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="text-gray-600 font-medium">123 Artisan Lane, Craft Village, ST</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-200/50 inline-block">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Hours</h4>
                            <div className="space-y-1 text-sm text-gray-500 font-medium">
                                <p>Mon - Fri: 9am - 6pm</p>
                                <p>Sat: 10am - 4pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-rony-navy/5 border border-gray-50">
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input 
                                    type="text" 
                                    className="w-full bg-rony-stone/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-rony-navy/10 outline-none transition-all placeholder:text-gray-400" 
                                    placeholder="Full Name" 
                                />
                                <input 
                                    type="email" 
                                    className="w-full bg-rony-stone/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-rony-navy/10 outline-none transition-all placeholder:text-gray-400" 
                                    placeholder="Email Address" 
                                />
                            </div>
                            <div className="relative">
                                <select className="w-full bg-rony-stone/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-rony-navy/10 outline-none transition-all appearance-none cursor-pointer text-gray-500">
                                    <option value="" disabled selected>Inquiry Category</option>
                                    {categories.filter(c => c.id !== 'all').map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name} Collection</option>
                                    ))}
                                    <option value="custom">Custom Design</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                            <textarea 
                                rows="4" 
                                className="w-full bg-rony-stone/50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-rony-navy/10 outline-none transition-all placeholder:text-gray-400 resize-none" 
                                placeholder="Your Message"
                            ></textarea>
                            <button className="w-full bg-rony-navy text-white font-bold py-5 rounded-2xl hover:bg-opacity-90 transition-all shadow-lg shadow-rony-navy/10 mt-2 active:scale-[0.98]">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer or Bottom Section */}
            <footer className="bg-rony-navy text-white py-12 px-4 md:px-8 lg:px-12 mt-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="RonyCraft Logo" className="h-8 w-auto rounded-full brightness-0 invert" />
                        <span className="font-bold text-xl tracking-tight">RonyCraft</span>
                    </div>
                    <p className="text-gray-400 text-sm">© 2026 RonyCraft. Handcrafted with passion.</p>
                    <div className="flex gap-6 text-sm font-medium text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
