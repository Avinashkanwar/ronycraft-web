import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../src/assets/login.png';
import logo from '../../src/assets/ronycraft_logo.jpg';
import { login } from '../../src/api';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await login({ username: email, password }); // Django often uses 'username'
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.error || 'Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-rony-stone p-4">
            <div className="w-full max-w-4xl bg-rony-light rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row">

                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center bg-white min-h-[250px] md:min-h-[500px]">
                    <img
                        src={loginImage}
                        alt="Login Illustration"
                        className="max-w-full h-auto rounded-xl"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className="flex flex-col items-center mb-6">
                        <img src={logo} alt="RonyCraft Logo" className="h-12 md:h-16 w-auto mb-3" />
                        <h1 className="text-xl md:text-2xl font-bold text-rony-navy">RonyCraft</h1>
                        <p className="text-xs md:text-sm text-rony-orange font-medium italic">Carry Your World With Style</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-rony-navy mb-2">Welcome Back</h2>
                    <p className="text-sm md:text-base text-rony-text mb-6 md:mb-8">Sign in to continue shopping</p>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}

                    <button className="w-full flex items-center justify-center gap-3 bg-rony-navy text-white font-medium py-2.5 md:py-3 text-sm md:text-base rounded-lg hover:bg-opacity-90 transition-colors mb-4 md:mb-6 cursor-pointer border border-rony-navy">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        Sign in with Google
                    </button>

                    <div className="relative mb-4 md:mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-rony-light text-rony-text rounded">Or continue with</span>
                        </div>
                    </div>

                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-rony-text mb-2">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-300 text-rony-text placeholder-gray-500 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy transition-colors"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-rony-text mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-white border border-gray-300 text-rony-text placeholder-gray-500 focus:outline-none focus:border-rony-navy focus:ring-1 focus:ring-rony-navy transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-rony-navy text-white font-semibold py-2.5 md:py-3 text-sm md:text-base rounded-lg hover:bg-opacity-90 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer flex justify-center items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : 'Log In'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
