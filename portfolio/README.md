# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Three.js, and Framer Motion. Features stunning 3D animations, smooth scrolling, and an elegant dark theme.

## Features

- **3D Animated Background**: Interactive particle system and geometric shapes using Three.js
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with gradient accents
- **Sections**:
  - Hero with animated intro
  - About with services showcase
  - Projects gallery with hover effects
  - Skills with animated progress bars
  - Contact form with validation
  - Footer with social links

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling navigation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the portfolio.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### 1. Personal Information

Update the following files with your information:

**Hero Section** (`src/components/Hero.jsx`):
- Replace "Your Name" with your name
- Update the subtitle with your role
- Update social media links

**About Section** (`src/components/About.jsx`):
- Update the description text
- Modify the stats (years, projects, clients)
- Customize services offered

**Contact Section** (`src/components/Contact.jsx`):
- Update email, phone, and location
- Configure form submission endpoint

**Footer** (`src/components/Footer.jsx`):
- Update name and social links

### 2. Projects

Edit `src/components/Projects.jsx`:
- Replace placeholder images with your project screenshots
- Update project titles, descriptions, and tags
- Add your GitHub and live demo links

### 3. Skills

Modify `src/components/Skills.jsx`:
- Update skill categories
- Add/remove skills
- Adjust skill levels (percentages)
- Change icons

### 4. Colors and Theme

Edit `src/index.css` to change:
- Color palette (CSS variables)
- Gradients
- Font family
- Spacing

### 5. 3D Background

Customize `src/components/ThreeBackground.jsx`:
- Change particle colors
- Adjust animation speeds
- Modify geometric shapes
- Add new 3D elements

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── ThreeBackground.jsx  # 3D animated background
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Projects.jsx        # Projects gallery
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer
│   │   └── *.css              # Component styles
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── package.json
└── vite.config.js
```

## Tips for Customization

1. **Images**: Replace placeholder images in the Projects section with actual screenshots
2. **Resume**: Add a download resume button in the Hero or About section
3. **Blog**: Consider adding a blog section if needed
4. **Animations**: Adjust animation delays and durations in Framer Motion variants
5. **SEO**: Update meta tags in `index.html` for better SEO

## Performance Optimization

- Three.js canvas is positioned as fixed background for better performance
- Components use React.memo where appropriate
- Animations use CSS transforms for hardware acceleration
- Images should be optimized (use WebP format when possible)

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your portfolio!

## Credits

Built with ❤️ using React, Three.js, and Framer Motion

---

## Need Help?

If you need help customizing this portfolio:
1. Check the component files - they're well-commented
2. Refer to documentation:
   - [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
   - [Framer Motion Docs](https://www.framer.com/motion/)
   - [Three.js Docs](https://threejs.org/docs/)

Happy coding! 🚀
