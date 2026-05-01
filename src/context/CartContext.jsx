import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
    getCart, 
    addToCart as addToCartApi, 
    updateCartItem as updateCartItemApi, 
    removeCartItem as removeCartItemApi, 
    clearCart as clearCartApi 
} from '../api';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sessionId, setSessionId] = useState(() => {
        let id = localStorage.getItem('ronycraftSessionId');
        if (!id) {
            id = uuidv4();
            localStorage.setItem('ronycraftSessionId', id);
        }
        return id;
    });

    const [bookings, setBookings] = useState(() => {
        const savedBookings = localStorage.getItem('ronycraftBookings');
        return savedBookings ? JSON.parse(savedBookings) : [];
    });

    // Fetch cart from API on initial load
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await getCart(sessionId);
                setCartItems(response.data.items || []);
            } catch (error) {
                console.error("Error fetching cart:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [sessionId]);

    useEffect(() => {
        localStorage.setItem('ronycraftBookings', JSON.stringify(bookings));
    }, [bookings]);

    const addToCart = async (product) => {
        try {
            const response = await addToCartApi(sessionId, {
                product_id: product.id,
                quantity: 1
            });
            // Update cart items from response
            const updatedCart = await getCart(sessionId);
            setCartItems(updatedCart.data.items);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            await removeCartItemApi(sessionId, { product_id: itemId });
            const updatedCart = await getCart(sessionId);
            setCartItems(updatedCart.data.items);
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    };

    const updateQuantity = async (itemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
            return;
        }
        try {
            await updateCartItemApi(sessionId, {
                product_id: itemId,
                quantity: quantity
            });
            const updatedCart = await getCart(sessionId);
            setCartItems(updatedCart.data.items);
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
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

    const clearCart = async () => {
        try {
            await clearCartApi(sessionId);
            setCartItems([]);
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };

    const getCartTotal = () => {
        // Assuming the backend provides the total, or we calculate it from items
        // The items from backend might have price_at_addition or similar
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.product.price);
            return total + (price * item.quantity);
        }, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cartItems,
        bookings,
        loading,
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
