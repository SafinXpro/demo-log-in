# 🚀 Quick Start Guide - Sun Star Elevator React App

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Environment File
```bash
# Copy the example environment file
cp .env.example .env

# Or create manually with this content:
# VITE_API_URL=http://localhost:5000/api
```

### Step 3: Start Development Server
```bash
npm run dev
```

Your app will be available at: `http://localhost:3000`

## 📝 Testing the Application

### Public Pages (No Login Required)
- **Home**: `http://localhost:3000/`
- **Products**: `http://localhost:3000/products`
- **Services**: `http://localhost:3000/services`
- **About**: `http://localhost:3000/about`
- **Contact**: `http://localhost:3000/contact`

### Authentication Pages
- **Login**: `http://localhost:3000/login`
- **Register**: `http://localhost:3000/register`

### Test Credentials (Mock Login)
Since we're using mock authentication for now:

**Admin Access:**
- Email: `admin@sunstar.com` (any email with "admin")
- Password: `Test123` (any password, min 6 chars)
- Redirects to: `/admin/dashboard`

**Customer Access:**
- Email: `customer@example.com` (any email without "admin")
- Password: `Test123` (any password, min 6 chars)
- Redirects to: `/customer/panel`

### Protected Routes

**Admin Routes** (requires admin role):
- `/admin/dashboard` - Dashboard Overview
- `/admin/installation` - Installation Projects
- `/admin/maintenance` - Maintenance Schedules
- `/admin/service-history` - Service History
- `/admin/technicians` - Technician Management
- `/admin/settings` - Settings

**Customer Routes** (requires customer/user role):
- `/customer/panel` - Customer Dashboard
- `/customer/service` - Request Service
- `/customer/settings` - Customer Settings

## 🎨 Key Features to Test

### 1. Form Validation
Try these forms to see validation in action:
- Login form (email format, password length)
- Registration form (password strength, confirmation match)
- Contact form (required fields, email format)
- Service request form (date validation)

### 2. Animations
Navigate between pages to see:
- Fade in animations on page load
- Staggered animations on card grids
- Hover effects on cards and buttons
- Smooth transitions

### 3. Responsive Design
Test on different screen sizes:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)
- Mobile menu on small screens

### 4. State Management
- Login/logout to see Redux state changes
- Check localStorage for token persistence
- Test protected route redirects

## 🔧 Common Tasks

### Add a New Page
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in Header/Sidebar

### Add a New API Endpoint
1. Add to RTK Query in `src/store/api/apiSlice.js`
2. Or use Axios in `src/utils/api.js`

### Style a Component
Use Tailwind classes:
```jsx
<div className="bg-orange-500 text-white px-4 py-2 rounded-lg">
  Content
</div>
```

### Add Animation
Use Framer Motion:
```jsx
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/utils/constants'

<motion.div
  variants={ANIMATION_VARIANTS.fadeInUp}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.js or:
npm run dev -- --port 3001
```

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear build cache
rm -rf dist
npm run build
```

## 📚 Project File Overview

```
Key Files:
├── src/main.jsx           → App entry with Redux & Router
├── src/App.jsx            → Route definitions
├── src/store/store.js     → Redux store configuration
├── tailwind.config.js     → Tailwind configuration
├── vite.config.js         → Vite build configuration
└── package.json           → Dependencies & scripts
```

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Test public pages
4. ✅ Test authentication flow
5. ✅ Test admin dashboard
6. ✅ Test customer panel
7. ✅ Connect to real backend API (when ready)

## 📞 Need Help?

Check the main README.md for detailed documentation.

---

**Happy Coding! 🎉**
