# Pixellium - Digital Marketing Landing Page

A modern, fully animated landing page for a digital marketing company built with React and Bootstrap. Features smooth animations, hover effects, and a professional design with puzzle-themed hero section.

## Features

- **Fully Animated**: Smooth scroll animations using AOS (Animate On Scroll)
- **Professional Design**: Clean, modern UI with gradient effects
- **Interactive Elements**: Hover effects on cards, buttons, and images
- **Puzzle Hero Section**: Unique animated puzzle pieces in the hero section
- **Responsive Design**: Mobile-friendly layout
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Color-changing Effects**: Dynamic color changes on hover

## Sections

1. **Home/Hero**: Animated puzzle pieces with call-to-action buttons
2. **About Us**: Company information with animated statistics and floating cards
3. **Our Works**: Portfolio showcase with hover effects
4. **Careers**: Job listings and company benefits
5. **Contact**: Contact form and company information
6. **Footer**: Social links and company information

## Technologies Used

- React 18
- React Bootstrap
- Bootstrap 5
- AOS (Animate On Scroll)
- React Icons
- CSS3 with custom animations

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pixellium-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.js              # Main application component
├── index.js            # React entry point
├── index.css           # Global styles and animations
└── components/         # (Future: Reusable components)

public/
├── index.html          # HTML template
└── manifest.json       # PWA manifest
```

## Key Features

### Animations
- **AOS Integration**: Scroll-triggered animations
- **CSS Animations**: Custom keyframe animations
- **Hover Effects**: Interactive hover states
- **Puzzle Animation**: Floating puzzle pieces in hero section

### Design Elements
- **Gradient Text**: CSS gradient text effects
- **Custom Buttons**: Styled buttons with hover effects
- **Floating Cards**: Animated service cards
- **Work Portfolio**: Image hover effects with overlays

### Responsive Design
- Mobile-first approach
- Bootstrap grid system
- Responsive typography
- Adaptive animations

## Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  /* ... */
}
```

### Content
Update the data arrays in `src/App.js`:
- `worksData`: Portfolio items
- `statsData`: Company statistics
- `benefitsData`: Career benefits
- `jobData`: Job listings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images from Unsplash
- Lazy loading for animations
- Efficient CSS animations
- Minimal JavaScript footprint

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React and Bootstrap 