# Portfolio Assignment

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **About Me Widget**: Three clickable tabs (About Me, Experiences, Recommended) with smooth transitions
- **Gallery Widget**: Image gallery with horizontal scrolling and "Add Image" functionality
- **Responsive Design**: Works seamlessly on laptop screens and above (768px width minimum)
- **Modern UI**: Dark theme with shadows, gradients, and smooth interactions

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AboutWidget.tsx    # Left widget with tabs
│   └── GalleryWidget.tsx  # Right widget with image gallery
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
├── index.css             # Global styles with Tailwind
└── App.css               # Custom scrollbar styles
```

## Features Implementation

### About Widget
- Three tabs: "About Me", "Experiences", "Recommended"
- Smooth tab transitions with active state styling
- Scrollable content area
- Navigation arrows at the bottom

### Gallery Widget
- Displays images in a horizontal scrollable gallery
- "Add Image" button to add new images via URL prompt
- Left/Right navigation arrows for scrolling
- Hover effects with grayscale to color transition
- Images maintain aspect ratio with proper sizing

## Responsive Design

The application is optimized for:
- Desktop screens (1024px and above)
- Laptop screens (768px and above)
- Tablets in landscape mode

## Deployment

This project can be deployed to:
- Vercel
- Netlify
- Render
- Any static hosting platform

Simply run `npm run build` and deploy the `dist` folder.

## Live Demo

[Add your deployed URL here]

## GitHub Repository

[Add your GitHub repository URL here]
