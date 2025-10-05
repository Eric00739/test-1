# 🏭 FastFun Remote - B2B Smart Remote Control OEM/ODM

A modern, professional website for **FastFun Remote**, a China-based B2B smart remote control OEM/ODM manufacturer. Built with Next.js 15, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🎯 About FastFun Remote

FastFun Remote specializes in RF & Wi-Fi control solutions for OEMs worldwide, offering:
- 15+ years of industry experience
- 500+ customers across 32+ countries
- 7-day prototyping with 98% on-time delivery
- Complete OEM/ODM customization services
- FCC/CE/RoHS certification support

## ✨ Technology Stack

- **⚡ Next.js 15** - React framework with App Router
- **📘 TypeScript 5** - Type-safe development
- **🎨 Tailwind CSS 4** - Utility-first CSS framework
- **🧩 shadcn/ui** - High-quality accessible components
- **🎯 Lucide React** - Beautiful icon library
- **🌈 Framer Motion** - Smooth animations
- **📊 Recharts** - Data visualization
- **🔧 Prisma** - Database ORM
- **📱 Responsive Design** - Mobile-first approach

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static files (for GitHub Pages)
npm run export

# Preview production build
npm run preview
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 🌍 Deployment Options

### 1. GitHub Pages (Recommended)

The project is pre-configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/fastfun-remote.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" and "/ (root)"
   - Save settings

3. **Automatic Deployment**:
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at `https://yourusername.github.io/fastfun-remote`

### 2. Vercel (Alternative)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables** in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=FastFun Remote
   ```

### 3. Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

2. **Environment Variables**:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-domain.netlify.app
   ```

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=FastFun Remote

# Contact Form (Optional)
CONTACT_EMAIL_RECIPIENT=your-email@example.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Production Build

The project is optimized for production with:

- **Static Export**: Generates static HTML files for GitHub Pages
- **Image Optimization**: Unoptimized for static hosting compatibility
- **Code Splitting**: Optimized bundle sizes
- **Security Headers**: Built-in security configurations
- **Performance**: Gzip compression and caching strategies

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── products/          # Products page
│   ├── contact/           # Contact page
│   ├── blog/              # Blog page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Favicon
├── components/            # Reusable components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities and configurations
├── hooks/                # Custom React hooks
└── prisma/               # Database schema
```

## 🎨 Features

### 🏠 Homepage
- Hero section with company overview
- Product quick navigation
- OEM/ODM process showcase
- Industry applications
- Factory capabilities
- Customer testimonials
- Contact form integration

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Smooth animations and transitions

### 🎯 Orange Theme
- Custom orange/amber color scheme
- Professional B2B appearance
- Consistent branding throughout
- High contrast for accessibility

### ⚡ Performance
- Optimized images and assets
- Lazy loading components
- Minimal JavaScript bundle
- Fast page load times

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run type-check       # TypeScript type checking

# Production
npm run build            # Build for production
npm run export           # Export static files
npm run start            # Start production server
npm run preview          # Preview static build
```

## 📊 SEO & Analytics

The website includes:
- **Meta Tags**: Optimized for search engines
- **Structured Data**: JSON-LD for better indexing
- **Sitemap**: Auto-generated for search engines
- **Robots.txt**: Configured for proper crawling
- **Analytics Ready**: Google Analytics integration

## 🔒 Security

- **HTTPS Ready**: Secure connections
- **Security Headers**: XSS protection, content type options
- **Input Validation**: Form sanitization
- **CSRF Protection**: Built-in Next.js security

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to FastFun Remote. All rights reserved.

## 📞 Contact

- **Website**: [FastFun Remote](https://fastfun-remote.com)
- **Email**: info@fastfun-remote.com
- **Phone**: +86-xxx-xxxx-xxxx

---

Built with ❤️ for FastFun Remote | Powered by Next.js & TypeScript
