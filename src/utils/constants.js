// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update',
    CHANGE_PASSWORD: '/users/change-password',
  },
  SERVICES: {
    LIST: '/services',
    CREATE: '/services/create',
    UPDATE: '/services/update',
    DELETE: '/services/delete',
  },
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    INSTALLATIONS: '/admin/installations',
    MAINTENANCE: '/admin/maintenance',
    TECHNICIANS: '/admin/technicians',
    SERVICE_HISTORY: '/admin/service-history',
  },
}

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  CUSTOMER: 'customer',
  TECHNICIAN: 'technician',
  USER: 'user',
}

// Service types
export const SERVICE_TYPES = {
  INSTALLATION: 'installation',
  MAINTENANCE: 'maintenance',
  CUSTOMIZATION: 'customization',
  MODERNIZATION: 'modernization',
}

// Elevator categories
export const ELEVATOR_CATEGORIES = {
  PASSENGER: 'passenger',
  COMMERCIAL: 'commercial',
  CARGO: 'cargo',
  CAR: 'car',
}

// Animation variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
}

// Toast messages
export const TOAST_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful! Welcome back.',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  REGISTER_SUCCESS: 'Registration successful! Please login.',
  UPDATE_SUCCESS: 'Updated successfully!',
  DELETE_SUCCESS: 'Deleted successfully!',
  ERROR: 'Something went wrong. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
}

// Company info
export const COMPANY_INFO = {
  NAME: 'Sun Star Elevator & Engineering',
  TAGLINE: 'Trusted Since 1999',
  PHONE: ['01711171391', '01726643500'],
  EMAIL: 'sunstarelevator.92@gmail.com',
  ADDRESS: 'House#04, Road#06, Sector#11, Uttara, Dhaka-1230, Bangladesh',
  BUSINESS_HOURS: {
    weekdays: 'Saturday - Thursday: 9:00 AM - 6:00 PM',
    weekend: 'Friday: Closed',
  },
}

// Stats
export const COMPANY_STATS = {
  PROJECTS: '300+',
  SATISFACTION: '85%',
  YEARS: '25+',
  TECHNICIANS: '50+',
}
