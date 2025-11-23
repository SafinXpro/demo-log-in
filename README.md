# Sun Star Elevator & Engineering - React Application

A modern, fully-featured React.js application for Sun Star Elevator & Engineering, converted from HTML/CSS/JS to a professional React stack.

## 🚀 Tech Stack

### Core Technologies
- **React 18.2** - UI Framework
- **Vite** - Build Tool & Dev Server
- **React Router v6** - Client-side Routing
- **Redux Toolkit** - State Management
- **RTK Query** - API Data Fetching

### Styling & UI
- **Tailwind CSS** - Utility-first CSS Framework
- **Shadcn/UI inspired components** - Reusable UI Components
- **Framer Motion** - Animation Library

### Form Management & Validation
- **React Hook Form** - Form State Management
- **Yup** - Schema Validation

### Additional Libraries
- **Axios** - HTTP Client
- **React Toastify** - Notifications
- **Lucide React** - Icon Library
- **React Icons** - Additional Icons

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI components (Button, Input, Card, etc.)
│   ├── admin/          # Admin-specific components
│   ├── customer/       # Customer-specific components
│   ├── Header.jsx      # Main header component
│   ├── Footer.jsx      # Main footer component
│   └── ProtectedRoute.jsx
├── pages/              # Page components
│   ├── auth/           # Authentication pages
│   ├── admin/          # Admin dashboard pages
│   ├── customer/       # Customer panel pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Products.jsx
│   └── Services.jsx
├── layouts/            # Layout components
│   ├── MainLayout.jsx
│   ├── AuthLayout.jsx
│   ├── AdminLayout.jsx
│   └── CustomerLayout.jsx
├── store/              # Redux store
│   ├── slices/         # Redux slices
│   ├── api/            # RTK Query API slices
│   └── store.js
├── hooks/              # Custom React hooks
│   ├── useAuth.js
│   ├── useMediaQuery.js
│   └── useLocalStorage.js
├── utils/              # Utility functions
│   ├── api.js
│   ├── constants.js
│   ├── helpers.js
│   └── validationSchemas.js
├── assets/             # Static assets
├── styles/             # Global styles
│   └── index.css
├── App.jsx             # Main app component with routes
└── main.jsx            # App entry point
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your API URL.

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔑 Features

### Public Features
- ✅ Responsive homepage with company stats
- ✅ Product catalog with category filtering
- ✅ Service listings
- ✅ About us page
- ✅ Contact form with validation
- ✅ Smooth animations with Framer Motion

### Authentication
- ✅ Login with form validation
- ✅ Registration with password strength validation
- ✅ Protected routes
- ✅ Role-based access control (Admin/Customer)

### Admin Dashboard
- ✅ Dashboard overview with statistics
- ✅ Installation project management
- ✅ Maintenance scheduling
- ✅ Service history
- ✅ Technician management
- ✅ Settings

### Customer Panel
- ✅ Personal dashboard
- ✅ Service request submission
- ✅ Request tracking
- ✅ Settings

## 🎨 UI Components

All UI components are built following Shadcn/UI patterns:

- **Button** - Multiple variants (default, outline, ghost, destructive, secondary)
- **Input** - With error handling
- **Label** - Form labels with required indicator
- **Card** - Flexible card component with subcomponents
- **Spinner** - Loading indicators

## 🔐 Authentication Flow

1. User logs in via `/login`
2. Credentials are validated
3. On success, user data and token are stored in Redux
4. Token is saved to localStorage
5. User is redirected based on role:
   - Admin → `/admin/dashboard`
   - Customer → `/customer/panel`

## 🛡️ Protected Routes

Routes are protected using the `ProtectedRoute` component:

```jsx
<ProtectedRoute allowedRoles={['admin']}>
  <AdminLayout />
</ProtectedRoute>
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

Framer Motion animations are used throughout:
- **fadeIn** - Fade in effect
- **fadeInUp** - Fade in from bottom
- **slideInLeft** - Slide from left
- **slideInRight** - Slide from right
- **staggerContainer** - Staggered children animation
- **scaleIn** - Scale up effect

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Form Validation

All forms use React Hook Form + Yup validation:
- Login form
- Registration form
- Contact form
- Service request form
- Profile update form

## 🌐 API Integration

The app is configured to work with a backend API:
- Base URL configured via environment variable
- Axios instance with interceptors
- RTK Query for data fetching
- Automatic token attachment
- Error handling with toast notifications

## 🎯 Mock Login Credentials

For testing purposes:
- **Admin**: Use any email with "admin" in it
- **Customer**: Use any other email
- **Password**: Any password (min 6 characters)

## 📦 Production Build

The production build includes:
- Code splitting
- Minification
- Tree shaking
- Optimized assets
- Environment-based configuration

## 🤝 Contributing

This is a converted project from HTML to React. To maintain consistency:
1. Follow the existing folder structure
2. Use Tailwind CSS for styling
3. Implement Framer Motion for animations
4. Use React Hook Form for forms
5. Follow the component naming conventions

## 📄 License

© 2025 Sun Star Elevator & Engineering. All rights reserved.

## 🙏 Acknowledgments

- Original HTML/CSS design
- Tailwind CSS team
- Shadcn for UI inspiration
- React and Vite communities

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**
