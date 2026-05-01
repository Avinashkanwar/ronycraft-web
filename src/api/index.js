export { default as apiClient } from "./apiClient";
export { ENDPOINTS } from "./endpoints";

import apiClient from "./apiClient";
import { ENDPOINTS } from "./endpoints";

export const getProducts = (params = {}) =>
  apiClient.get(ENDPOINTS.PRODUCTS, { params });

export const getProductDetail = (id) =>
  apiClient.get(ENDPOINTS.PRODUCT_DETAIL(id));

export const getCategories = () =>
  apiClient.get(ENDPOINTS.CATEGORIES);

export const getCategoryDetail = (id) =>
  apiClient.get(ENDPOINTS.CATEGORY_DETAIL(id));

export const getCart = (sessionId) =>
  apiClient.get(ENDPOINTS.CART(sessionId));

export const addToCart = (sessionId, data) =>
  apiClient.post(ENDPOINTS.CART_ADD_ITEM(sessionId), data);

export const updateCartItem = (sessionId, data) =>
  apiClient.patch(ENDPOINTS.CART_UPDATE_ITEM(sessionId), data);

export const removeCartItem = (sessionId, data) =>
  apiClient.delete(ENDPOINTS.CART_REMOVE_ITEM(sessionId), { data });

export const clearCart = (sessionId) =>
  apiClient.delete(ENDPOINTS.CART_CLEAR(sessionId));

export const getOrders = () =>
  apiClient.get(ENDPOINTS.ORDERS);

export const getOrderDetail = (id) =>
  apiClient.get(ENDPOINTS.ORDER_DETAIL(id));

export const login = (data) =>
  apiClient.post(ENDPOINTS.LOGIN, data);

export const logout = () =>
  apiClient.post(ENDPOINTS.LOGOUT);

export const register = (data) =>
  apiClient.post(ENDPOINTS.REGISTER, data);
