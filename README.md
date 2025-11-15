# kikiding.space

Personal portfolio website featuring an interactive 3D card design with stunning visual effects.

## 🛠️ Tech Stack

- **Styling**: Tailwind CSS v4
- **SEO**: next-seo
- **Icons**: Lucide React
- **Font**: Space Grotesk

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x (using nvm: `nvm use 20`)
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Run development server
nvm use 20
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
nvm use 20
yarn build
```

### Production

```bash
# Start production server
yarn start
```

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── CardEffects.tsx      # Glassmorphism and spotlight effects
│   │   ├── FogOverlay.tsx       # Animated fog elements
│   │   ├── JsonLd.tsx           # Structured data (JSON-LD)
│   │   ├── ProfileCard.tsx      # Main card component with 3D logic
│   │   ├── ProfileCardFront.tsx # Front side of the card
│   │   ├── ProfileCardBack.tsx  # Back side of the card
│   │   ├── SEOConfig.tsx        # SEO meta tags configuration
│   │   ├── SkillsSection.tsx    # Skills display
│   │   ├── SocialLinks.tsx      # Social media links
│   │   └── StarField.tsx        # Animated background stars
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout with SEO
│   └── page.tsx                 # Home page
├── public/
│   ├── og-image.png             # Open Graph image
│   ├── me.png                   # Profile image
│   └── robots.txt               # Robots file
└── package.json
```

## 📝 License

Personal project - All rights reserved

## 👤 Author

**Nur Fikri (Kiki)**
- Website: [kikiding.space](https://kikiding.space)
- GitHub: [@codingki](https://github.com/codingki)
- Twitter: [@kikiding](https://twitter.com/kikiding)
- LinkedIn: [nur-fikri](https://linkedin.com/in/nur-fikri)

---

Built with ❤️ using Next.js and TypeScript
