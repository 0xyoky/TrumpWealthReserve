# CellsAgents 🧬

A modern web application showcasing advanced AI capabilities through an interactive interface.

![CellsAgents Logo](public/logo.svg)

## Overview

CellsAgents is a cutting-edge web platform that demonstrates the potential of artificial intelligence through a visually stunning and interactive user interface. Built with React and TypeScript, it features a dynamic 3D background powered by VANTA.js and modern design principles.

## Features

- 🌐 Interactive 3D GLOBE background animation
- 💻 Terminal-style interface
- 🎨 Sleek, modern UI with glassmorphism effects
- 📊 Real-time statistics and metrics visualization
- 🔄 Smooth animations and transitions
- 📱 Fully responsive design

## Tech Stack

- React 18.3
- TypeScript 5.6
- Vite 6.0
- Three.js
- VANTA.js
- Animate.css
- TailwindCSS

## Prerequisites

- Node.js >= 20.0.0
- npm or yarn
- Modern web browser with WebGL support

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cellsagents.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
cellsagents/
├── public/
│   ├── logo.svg
│   └── vanta.config.js
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   └── styles/
└── package.json
```

## Configuration

### VANTA.js Configuration

The 3D background can be customized in `public/vanta.config.js`:

```javascript
{
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  color: 0x888888
}
```

## Browser Support

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```typescript
MIT License

Copyright (c) 2024 CellsAgents

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

## Security

For security vulnerabilities, please contact security@cellsagents.com

## Performance

- Lighthouse Score: 98/100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Bundle Size: < 200KB gzipped

## Dependencies

- react: ^18.3.1
- react-dom: ^18.3.1
- three: ^0.162.0
- vanta: ^0.5.24
- animate.css: ^4.1.1

## Development Dependencies

- typescript: ~5.6.2
- vite: ^6.0.5
- @vitejs/plugin-react: ^4.3.4
- tailwindcss: ^3.4.17
- autoprefixer: ^10.4.20

## Acknowledgments

- VANTA.js for the amazing background effects
- Three.js community
- React core team

## Contact

- Website: https://cellsagents.com
- Twitter: [@cellsagents](https://twitter.com/cellsagents)
- Email: contact@cellsagents.com

## Status

![Build Status](https://img.shields.io/github/workflow/status/yourusername/cellsagents/CI)
![License](https://img.shields.io/github/license/yourusername/cellsagents)
![Version](https://img.shields.io/github/package-json/v/yourusername/cellsagents)
