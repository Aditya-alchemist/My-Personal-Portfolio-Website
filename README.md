# Blockchain Developer Portfolio

A modern, full-stack Web3 portfolio showcasing blockchain development expertise with real-time wallet integration and decentralized storage.




## 🚀 Live Demo

**Portfolio:** [https://adityaalchemist.netlify.app/](https://adityaalchemist.netlify.app/)  


## ✨ Features

### 🎨 **Modern UI/UX**
- **Dark theme** with glassmorphism effects
- **Responsive design** for all devices
- **Smooth animations** with Framer Motion
- **Interactive wallet connection** display

### 🔗 **Web3 Integration**
- **Multi-wallet support** (MetaMask, WalletConnect, Coinbase)
- **Real-time wallet connection** status
- **Blockchain network detection**
- **IPFS image hosting** via Pinata

### 📱 **Portfolio Sections**
- **Hero section** with animated logo and typing effects
- **About section** with skills and technology showcase
- **Featured projects** with live demos and source code
- **Project archive** with comprehensive project history
- **Contact form** with EmailJS integration

### 🛠 **Technical Features**
- **Full-stack TypeScript** implementation
- **Server-side API** for contact management
- **Scroll-triggered animations**
- **Client-side routing** with Wouter
- **Form validation** with Zod schemas

## 🏗 Tech Stack

### **Frontend**
- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite 5.4.19** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations

### **Web3 & Blockchain**
- **Wagmi 2.15.6** - React hooks for Ethereum
- **WalletConnect** - Multi-wallet connection
- **Ethers.js 6.15.0** - Ethereum library
- **Viem** - TypeScript-first Ethereum interface

### **UI Components**
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form state management
- **EmailJS** - Contact form submissions

### **Backend**
- **Express.js 4.21.2** - Node.js web framework
- **Drizzle ORM** - Type-safe database toolkit
- **Zod** - Runtime type validation
- **CORS & Security** middleware

### **Development & Build**
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Cross-env** - Environment variables
- **TSX** - TypeScript execution

## 📁 Project Structure

```
/
├── api/                    # Backend serverless functions
│   ├── index.ts           # Main Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Development utilities
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Navigation.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   └── assets/        # Static assets
│   ├── index.html
│   └── vite.config.ts
├── shared/                # Shared TypeScript schemas
│   └── schema.ts
├── package.json
├── vercel.json           # Deployment configuration
└── README.md
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya-alchemist/My-Personal-Portfolio-Website.git
   cd My-Personal-Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client && npm install && cd ..
   ```

### **Development**

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   ```
   http://localhost:5000
   ```

### **Production Build**

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🌐 Deployment

### **Render Deployment**

1. **Connect your GitHub repository** to Render
2. **Configure build settings:**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Publish Directory:** `dist/public`

3. **Set environment variables:**
   ```
   NODE_ENV=production
   PORT=10000
   ```

### **Environment Variables**

Create a `.env` file for local development:

```env
NODE_ENV=development
PORT=5000
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```


## 🎨 Design Features

### **Visual Elements**
- **Animated logo** with rotating rings and corner accents
- **Glassmorphism effects** with backdrop blur
- **Gradient backgrounds** and glowing elements
- **Hover animations** and micro-interactions

### **Color Scheme**
- **Primary:** #00d4ff (Cyan)
- **Background:** #0a0a0a (Dark)
- **Text:** #ffffff (White)
- **Accent:** #1a1a1a (Dark Gray)

### **Typography**
- **Headers:** Inter (Bold)
- **Body:** Inter (Regular)
- **Code:** Fira Code (Monospace)

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized** for all screen sizes



## 🛡 Security Features

- **Input validation** with Zod schemas
- **XSS protection** with sanitized inputs
- **CORS configuration** for API security
- **Environment variable** protection
- **Type safety** throughout the application

## 📈 Performance Optimizations

- **Code splitting** with dynamic imports
- **Image optimization** for web delivery
- **Bundle size optimization** with tree shaking
- **Lazy loading** for non-critical components
- **CDN delivery** for static assets

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**


## 👨‍💻 Author

**Aditya Mishra**
- **Portfolio:** [https://your-portfolio.onrender.com]([https://your-portfolio.onrender.com](https://aditya-kumar-mishra-portfolio.onrender.com/))
- **GitHub:** [@Aditya-alchemist](https://github.com/Aditya-alchemist)
- **LinkedIn:** [Aditya Kumar Mishra](https://www.linkedin.com/in/aditya-kumar-mishra-alchemy)
- **Twitter:** [@Adityaalchemist](https://x.com/Adityaalchemist)
- **Email:** adityakumar41205@gmail.com

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Radix UI** for accessible components
- **Tailwind CSS** for utility-first styling
- **Render** for reliable hosting
- **Pinata** for IPFS storage
- **EmailJS** for contact form functionality

**⭐ Star this repository if you found it helpful!**
