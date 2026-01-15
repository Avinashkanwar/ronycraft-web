import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/ronycraft_logo.jpg';

const About = () => {
    const navigate = useNavigate();

    const basicInfo = [
        { label: 'Additional Business', value: 'Retail Business' },
        { label: 'Office / Sale Office', value: '-' },
        { label: 'Company CEO', value: 'Roshan Lal' },
        { label: 'GST Registration Date', value: '01-07-2017' },
        { label: 'Legal Status of Firm', value: 'Proprietorship' },
        { label: 'Annual Turnover', value: '40 L - 1.5 Cr' },
    ];

    const statutoryProfile = [
        { label: 'GST No.', value: '02AKSPL9671N1ZB' },
    ];

    return (
        <div className="bg-rony-stone min-h-screen font-sans text-rony-text">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-rony-stone/95 backdrop-blur-md px-4 md:px-8 lg:px-12 py-4 flex justify-between items-center border-b border-gray-300">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <img src={logo} alt="RonyCraft Logo" className="h-10 w-auto rounded-full" />
                    <div className="flex flex-col">
                        <span className="font-bold text-xl tracking-tight text-rony-navy leading-tight">RonyCraft</span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wide hidden sm:block">Handcrafted excellence</span>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="text-rony-navy font-medium hover:text-rony-orange transition-colors text-sm"
                >
                    Back to Home
                </button>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-rony-navy mb-4">About Us</h1>
                    <div className="max-w-3xl mx-auto space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Rony Craft Industries is a premier manufacturer dedicated to crafting high-quality bags that blend style with durability. With years of expertise in the industry, we pride ourselves on delivering exceptional products that cater to modern needs.
                        </p>
                        <p>
                            From travel essentials to daily carry, our bags are designed with precision and care, ensuring that every stitch represents our commitment to excellence. We believe in using the finest materials to create products that not only look good but stand the test of time.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 md:p-8">
                        <h2 className="text-xl font-bold text-rony-navy mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-rony-orange rounded-full"></span>
                            Basic Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                            {basicInfo.map((item, index) => (
                                <div key={index} className="flex flex-col border-b border-gray-100 pb-4 last:border-0 md:last:border-0 md:border-b-0">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</span>
                                    <span className="text-rony-navy font-medium text-lg">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-100">
                        <h2 className="text-xl font-bold text-rony-navy mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-rony-navy rounded-full"></span>
                            Statutory Profile
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {statutoryProfile.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</span>
                                    <span className="text-rony-navy font-medium text-lg font-mono">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
