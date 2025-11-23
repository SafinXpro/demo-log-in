import axios from 'axios'
import { toast } from 'react-toastify'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      // Server responded with error
      const message = error.response.data?.message || 'An error occurred'
      
      if (error.response.status === 401) {
        // Unauthorized - clear auth and redirect to login
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        window.location.href = '/login'
        toast.error('Session expired. Please login again.')
      } else if (error.response.status === 403) {
        toast.error('Access denied')
      } else {
        toast.error(message)
      }
    } else if (error.request) {
      // Request made but no response
      toast.error('Network error. Please check your connection.')
    } else {
      toast.error('An unexpected error occurred')
    }
    
    return Promise.reject(error)
  }
)

export default api
