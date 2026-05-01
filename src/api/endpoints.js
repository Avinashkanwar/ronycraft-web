// ─────────────────────────────────────────────
//  All backend API endpoint paths live here.
//  Always use these constants — never hard-code
//  URL strings directly in components/services.
// ─────────────────────────────────────────────

export const ENDPOINTS = {
  // ── Authentication ────────────────────────
  LOGIN: "accounts/login/",
  LOGOUT: "accounts/logout/",
  REGISTER: "accounts/register/",
  SOCIAL_LOGIN: "accounts/social-login/",
  CHANGE_PASSWORD: "accounts/change-password/",
  REFRESH_TOKEN: "accounts/token/refresh/",

  // ── Products ──────────────────────────────
  PRODUCTS: "products/",
  PRODUCT_DETAIL: (id) => `products/${id}/`,

  // ── Categories ────────────────────────────
  CATEGORIES: "categories/",
  CATEGORY_DETAIL: (id) => `categories/${id}/`,

  // ── Cart ──────────────────────────────────
  CART: (sessionId) => `carts/${sessionId}/`,
  CART_ADD_ITEM: (sessionId) => `carts/${sessionId}/add_item/`,
  CART_UPDATE_ITEM: (sessionId) => `carts/${sessionId}/update_item/`,
  CART_REMOVE_ITEM: (sessionId) => `carts/${sessionId}/remove_item/`,
  CART_CLEAR: (sessionId) => `carts/${sessionId}/clear/`,

  // ── Orders ────────────────────────────────
  ORDERS: "orders/",
  ORDER_DETAIL: (id) => `orders/${id}/`,
};
