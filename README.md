# BitTheCat Portfolio

A modern, responsive portfolio website built with **Deno** and **Tailwind CSS**.

## Features

- 🎨 **Modern Tailwind CSS** - Responsive, utility-first styling
- 📱 **Mobile Responsive** - Smooth vertical scrolling on all devices
- ⚡ **Lightning Fast** - Static site generation with Deno
- 🚀 **Easy to Deploy** - Simple static files, no complex build tooling
- 🎯 **Single Page** - Well-structured sections: Home, About, Portfolio, Social

## Project Structure

```
├── index.md              # Main portfolio content (markdown)
├── styles.css            # Tailwind CSS styles
├── tailwind.config.ts    # Tailwind configuration
├── deno.json             # Deno configuration with tasks
├── build.ts              # Build script to generate _site/
├── serve.ts              # Development server
├── assets/               # Images, icons, fonts
│   ├── img/              # Portfolio images
│   ├── svg/              # SVG icons
│   ├── css/              # CSS files
│   └── script/           # JavaScript files
└── _site/                # Build output (generated)
```

## Getting Started

### Prerequisites
- [Deno](https://deno.com) (v1.40+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BitTheCat/bitthecat-site.git
cd bitthecat-site
```

2. Verify Deno is installed:
```bash
deno --version
```

## Development

### Start Development Server

Run the local dev server with hot-reload:

```bash
deno task dev
```

The portfolio will be available at `http://localhost:3000`

### Build for Production

Generate the static site for deployment:

```bash
deno task build
```

This creates a `_site/` directory with all static files ready to deploy.

## Customization

### Edit Content

Open `index.md` to modify portfolio sections:
- **Home**: Title and introduction
- **About**: Profile image, bio, skills, experience
- **Portfolio**: Your projects and work
- **Social**: Links to GitHub, LinkedIn, etc.

### Styling

Tailwind CSS classes are used throughout. Modify `tailwind.config.ts` to customize:
- Colors (accent colors)
- Fonts
- Responsive breakpoints
- Theme extensions

### Assets

- **Images**: Place in `assets/img/`
- **Icons**: Place in `assets/svg/`
- **Fonts**: Already imported from Google Fonts

## Deployment

### Static Hosting Options

The `_site/` directory contains static HTML, CSS, and images. Deploy to:

- **GitHub Pages**: Push to `gh-pages` branch
- **Vercel**: Connect your Git repository
- **Netlify**: Drag & drop `_site/` folder
- **AWS S3 + CloudFront**: Upload static files
- **Traditional Web Hosting**: FTP the `_site/` contents

Example GitHub Pages setup:
```bash
# Build the site
deno task build

# Commit and push _site/ to gh-pages branch
git add _site/
git commit -m "Deploy portfolio"
git push origin main
```

## Technologies

- **Deno**: Modern JavaScript/TypeScript runtime
- **Tailwind CSS**: Utility-first CSS framework
- **HTML5**: Semantic markup
- **Responsive Design**: Mobile-first approach

## Performance

- ✅ Fully responsive (320px - 1920px+)
- ✅ Optimized images
- ✅ Minimal CSS (~20KB gzipped)
- ✅ No JavaScript dependencies
- ✅ Fast page load times

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT - Feel free to use this template for your own portfolio!

## Contact

- GitHub: [github.com/BitTheCat](https://github.com/BitTheCat)
- LinkedIn: [linkedin.com/in/michele-lotito](https://www.linkedin.com/in/michele-lotito/)
