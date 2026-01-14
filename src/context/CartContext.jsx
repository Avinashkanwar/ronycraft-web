import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage on initial load
        const savedCart = localStorage.getItem('ronycraftCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [bookings, setBookings] = useState(() => {
        const savedBookings = localStorage.getItem('ronycraftBookings');
        return savedBookings ? JSON.parse(savedBookings) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('ronycraftCart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('ronycraftBookings', JSON.stringify(bookings));
    }, [bookings]);

    const addToCart = (item) => {
        setCartItems(prev => {
            const existingItem = prev.find(i => i.id === item.id);
            if (existingItem) {
                return prev.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === itemId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const bookNow = (item) => {
        const booking = {
            ...item,
            bookingId: Date.now(),
            bookingDate: new Date().toISOString(),
            status: 'pending'
        };
        setBookings(prev => [...prev, booking]);
        return booking;
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cartItems,
        bookings,
        addToCart,
        removeFromCart,
        updateQuantity,
        bookNow,
        clearCart,
        getCartTotal,
        getCartCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
