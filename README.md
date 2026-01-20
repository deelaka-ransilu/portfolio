# Deelaka Ransilu - Portfolio

A modern, dark-themed portfolio website showcasing my projects, skills, and professional experience. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Dark Theme**: Sleek slate color palette with gradient accents
- **Smooth Animations**: Subtle fade-in, slide-in, and hover effects throughout
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero with animated gradient text
  - Professional experience timeline
  - Project showcase with tech stack badges
  - Skills categorization
  - Education and certifications
  - Contact section with social links

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages / Vercel / Netlify

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/deelaka-ransilu/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

The portfolio is highly customizable. Key areas to update:

### Personal Information

Edit the following in `src/App.tsx`:

- Contact details (email, phone, location)
- Social media links (GitHub, LinkedIn)
- Professional summary

### Experience

Update the `experiences` array with your work history

### Projects

Modify the `projects` array with your featured projects

### Skills

Customize the `skills` object to reflect your technical expertise

### Education

Update the `education` array with your academic background

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # shadcn/ui components
│   ├── App.tsx         # Main portfolio component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── index.html
```

## 🎯 Key Sections

1. **Home**: Eye-catching hero with animated gradient text and CTA buttons
2. **About**: Three-card layout highlighting developer, tech support, and learner aspects
3. **Experience**: Professional work history with detailed responsibilities
4. **Skills**: Categorized technical skills (Backend, Frontend, Infrastructure, Tools)
5. **Projects**: Featured projects with descriptions and tech stacks
6. **Education**: Academic qualifications and certifications
7. **Contact**: Email, phone, and social media links

## 🌟 Animation Features

- Fade-in-up animations for content sections
- Slide-in effects (left/right alternating)
- Hover lift effects on cards
- Scale transitions on interactive elements
- Shimmer effect on gradient text
- Floating scroll indicator
- Pulsing background orbs

## 📱 Responsive Design

- Mobile-first approach
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Touch-friendly buttons and links

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
# Deploy dist folder to gh-pages branch
```

### Vercel

```bash
# Connect repository to Vercel
# Automatic deployment on push
```

### Netlify

```bash
# Build command: npm run build
# Publish directory: dist
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Deelaka Ransilu**

- Email: ransilu.deelaka@gmail.com
- Phone: +94 71 202 6132
- LinkedIn: [deelaka-ransilu](https://www.linkedin.com/in/deelaka-ransilu/)
- GitHub: [deelaka-24](https://github.com/deelaka-ransilu)

---

Built with ❤️ using React, shadcn/ui, and Tailwind CSS
