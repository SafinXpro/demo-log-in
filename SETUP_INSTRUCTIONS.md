# 📖 Complete Setup Instructions

## Sun Star Elevator & Engineering - React Application Setup

Follow these steps to get your React application up and running.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
  - Download from: https://nodejs.org/
  - Verify: `node --version`

- **npm** (usually comes with Node.js)
  - Verify: `npm --version`

- **Git** (optional, for version control)
  - Download from: https://git-scm.com/

---

## 🚀 Step-by-Step Setup

### Step 1: Navigate to Project Directory

```bash
cd d:\Practicum\Frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (~200MB):
- React & React DOM
- Redux Toolkit
- React Router
- Tailwind CSS
- Framer Motion
- React Hook Form
- Yup
- Axios
- And many more...

**⏱️ Expected time: 2-5 minutes** (depending on internet speed)

### Step 3: Create Environment File

Create a `.env` file in the project root:

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Or manually create with this content:
VITE_API_URL=http://localhost:5000/api
```

### Step 4: Verify Installation

Check if everything is installed correctly:

```bash
npm list --depth=0
```

You should see all dependencies listed without errors.

### Step 5: Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.11  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 6: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the Sun Star Elevator homepage! 🎉

---

## ✅ Verification Checklist

After setup, verify these work:

- [ ] Homepage loads (`/`)
- [ ] Navigation menu works
- [ ] Click "Products" - page loads
- [ ] Click "Services" - page loads
- [ ] Click "About" - page loads
- [ ] Click "Contact" - page loads
- [ ] Click "Login" - login page loads
- [ ] Mobile menu works (resize browser)

---

## 🧪 Test the Application

### Test Public Pages

1. **Home Page** - `http://localhost:3000/`
   - Should show hero section with stats
   - Should show services section
   - Check animations work

2. **Products** - `http://localhost:3000/products`
   - Click different category tabs
   - Cards should display
   - Request Quote buttons work

3. **Contact** - `http://localhost:3000/contact`
   - Try submitting empty form (should show errors)
   - Fill valid data and submit
   - Should show success toast

### Test Authentication

1. **Register** - `http://localhost:3000/register`
   - Fill the registration form
   - Use valid email format
   - Password must match confirmation
   - Submit to see success message

2. **Login** - `http://localhost:3000/login`
   - **Admin Access:**
     - Email: `admin@sunstar.com`
     - Password: `Test123`
     - Should redirect to `/admin/dashboard`
   
   - **Customer Access:**
     - Email: `user@example.com`
     - Password: `Test123`
     - Should redirect to `/customer/panel`

### Test Protected Routes

1. **Admin Dashboard**
   - Login as admin
   - Navigate to all admin pages
   - Try logging out

2. **Customer Panel**
   - Login as customer
   - Submit a service request
   - Check dashboard

---

## 🎨 Customization

### Change Company Info

Edit `src/utils/constants.js`:

```javascript
export const COMPANY_INFO = {
  NAME: 'Your Company Name',
  EMAIL: 'your@email.com',
  PHONE: ['0123456789'],
  ADDRESS: 'Your Address',
}
```

### Change Colors

Edit `tailwind.config.js` or `src/styles/index.css`

### Add New Page

1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

---

## 🔧 Available Commands

### Development
```bash
npm run dev          # Start development server
```

### Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

### Linting
```bash
npm run lint         # Run ESLint
```

---

## 🐛 Troubleshooting

### Problem: Port 3000 already in use

**Solution 1:** Kill the process using port 3000
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- --port 3001
```

**Solution 2:** Change default port in `vite.config.js`

---

### Problem: Module not found errors

**Solution:** Clear and reinstall
```bash
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules, package-lock.json

# Reinstall
npm install
```

---

### Problem: Tailwind classes not working

**Solution 1:** Check if `src/styles/index.css` is imported in `main.jsx`

**Solution 2:** Restart dev server
```bash
# Stop with Ctrl+C, then
npm run dev
```

---

### Problem: Images not loading

**Solution:** 
- Check if images are in `public/assets/` folder
- Use correct path: `/assets/image.jpg` (not `./assets/`)
- Or the component will show fallback image

---

### Problem: Build fails

**Solution:**
```bash
# Clear build cache
Remove-Item -Recurse -Force dist

# Try build again
npm run build
```

---

## 📁 Project Structure Overview

```
Frontend/
├── public/                  # Static files
│   └── assets/             # Images, fonts
├── src/
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── layouts/           # Layout wrappers
│   ├── store/             # Redux store
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utilities
│   ├── styles/            # Global styles
│   ├── App.jsx            # Main app
│   └── main.jsx           # Entry point
├── .env                    # Environment variables (create this)
├── .env.example           # Environment template
├── package.json           # Dependencies
├── vite.config.js         # Vite config
├── tailwind.config.js     # Tailwind config
└── README.md              # Documentation
```

---

## 🔐 Environment Variables

Create `.env` file with:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Add more as needed
# VITE_APP_NAME=Sun Star Elevator
# VITE_ENABLE_ANALYTICS=false
```

**Note:** All Vite env vars must start with `VITE_`

---

## 📚 Learning Resources

### React
- Official Docs: https://react.dev/
- Tutorial: https://react.dev/learn

### Tailwind CSS
- Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com/

### Framer Motion
- Docs: https://www.framer.com/motion/

### Redux Toolkit
- Docs: https://redux-toolkit.js.org/

### React Hook Form
- Docs: https://react-hook-form.com/

---

## 🎯 Next Steps After Setup

1. ✅ Explore all pages
2. ✅ Test all features
3. ✅ Modify content and styles
4. ✅ Add your own features
5. ✅ Connect to backend API
6. ✅ Deploy to hosting

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Deploy Options
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Custom Server**: Upload `dist` folder

---

## 📞 Support

If you encounter issues:

1. Check QUICKSTART.md
2. Check README.md
3. Check CONVERSION_SUMMARY.md
4. Google the error message
5. Check React/Vite documentation

---

## ✅ Setup Complete!

If you've reached here and everything works, congratulations! 🎉

Your development environment is ready. Start building!

---

**Last Updated:** November 20, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
