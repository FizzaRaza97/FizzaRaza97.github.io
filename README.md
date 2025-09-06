# Data Scientist Portfolio

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion. Designed specifically for Data Scientists and AI Engineers to showcase their expertise in machine learning, data analysis, and research.

## 🚀 Features

- **Modern Design**: Dark theme with AI-inspired color palette (cyan, purple, teal)
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **TypeScript**: Fully typed for better development experience
- **Component Library**: Built with shadcn/ui components
- **Performance**: Vite-powered for fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts (for data visualizations)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Customization

### Colors
The portfolio uses a custom AI-inspired color palette defined in `tailwind.config.js`:
- `ai-cyan`: #00d4ff
- `ai-purple`: #8b5cf6
- `ai-teal`: #14b8a6
- `ai-pink`: #ec4899

### Content
Update the content in the respective component files:
- `src/components/HeroSection.tsx` - Hero section content
- Add more sections as needed

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── HeroSection.tsx
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🚀 Deployment

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 📄 License

MIT License - feel free to use this template for your own portfolio!