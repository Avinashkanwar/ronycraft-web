import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-4">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-2 text-center">Welcome Back</h2>
                <p className="text-gray-300 text-center mb-8">Sign in to continue to RonyCraft</p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b6b] focus:ring-1 focus:ring-[#ff6b6b] transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#ff6b6b] focus:ring-1 focus:ring-[#ff6b6b] transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                    >
                        Log In
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-400 text-sm">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-[#ff6b6b] hover:text-[#ff8e53] font-medium transition-colors">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
