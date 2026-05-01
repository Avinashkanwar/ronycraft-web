import axios from "axios";

// In development:  Vite proxy forwards /api → http://127.0.0.1:8000/api
// In production:   VITE_BASE_URL is the full backend URL
const baseURL =
  import.meta.env.DEV
    ? "/api"
    : import.meta.env.VITE_BASE_URL + "/api";

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor – attaches auth token to every request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor – global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      // Unauthorized – clear token and redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    if (status === 403) {
      console.error("Forbidden: You do not have permission to perform this action.");
    }

    if (status === 500) {
      console.error("Server error. Please try again later.");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
