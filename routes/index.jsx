import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import BagDetail from '../src/components/BagDetail';
import Cart from '../src/components/cart/Cart';
import Login from '../screens/login/Login';
import ShippingInfo from '../screens/shipping/ShippingInfo';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/bag/:id" element={<BagDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shipping" element={<ShippingInfo />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
