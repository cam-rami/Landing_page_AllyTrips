# AllyTrips Landing Page

Modern, responsive, and high-performance landing page for AllyTrips Colombia.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **High Performance**: Optimized for 90+ Lighthouse score
- **Animations**: Smooth scroll animations using Intersection Observer API
- **Accessibility**: ARIA labels, keyboard navigation, proper contrast ratios
- **Form Validation**: Client-side validation with user-friendly error messages
- **Modern Stack**: React 18 + Tailwind CSS 3

## 📋 Sections

1. **Header**: Sticky navigation with mobile hamburger menu
2. **Hero**: Full-screen hero with background image and CTAs
3. **What Is AllyTrips**: Feature showcase with image
4. **Pioneers Section**: Cards for traveler and ally pioneers
5. **CTA Banner**: Call-to-action banner
6. **Testimonials**: Customer testimonials with ratings
7. **How It Works**: 3-step process explanation
8. **Registration Form**: Pre-registration form with validation
9. **Footer**: Links, social media, and brand slogan

## 🎨 Color Palette

- **Primary (Azul Marino)**: `#1a3f6b`
- **Secondary (Verde Agua)**: `#4a9b8e`
- **Accent (Amarillo)**: `#ffc107`

## 🛠️ Installation

```bash
# Navigate to landing folder
cd landing

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📦 Project Structure

```
landing/
├── public/
│   ├── index.html
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Sections.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting
- Minified production build
- Optimized fonts from Google Fonts
- Preconnect to external domains
- Intersection Observer for animations

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Proper heading hierarchy
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader friendly

## 🔗 API Integration

The registration form is configured to send data to:
```
POST http://localhost:8888/pre-registration
```

Update the API endpoint in `src/components/RegistrationForm.jsx` when deploying to production.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Classes

- `animate-fade-in`: Fade in effect
- `animate-slide-up`: Slide up with fade
- `animate-slide-in-left`: Slide from left
- `animate-slide-in-right`: Slide from right

## 📝 License

© 2024 AllyTrips Colombia. All rights reserved.

## 🤝 Contributing

For questions or contributions, please contact the AllyTrips team.

---

**Built with ❤️ for AllyTrips Colombia**
