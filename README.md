# Jigglypuff Kingdom Landing Page

A magical, cute, and collector-coded landing page for the Jigglypuff Kingdom community.

## Features

- ✨ Magical, mystical design with soft pinks and gradients
- 📱 Fully responsive (mobile and desktop)
- 🎴 Hero section with contract address and action buttons
- 📊 Collection Quest stats section
- 💎 Creator fee transparency section
- 📖 Origin story section
- 🚀 Movement and mission section
- 🎓 Getting started guide for new users
- 🔗 Social links and footer

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Update Contract Address

Edit `components/HeroSection.tsx` and replace `YOUR_CONTRACT_ADDRESS_HERE` with your actual contract address.

### Update Links

Update the following links in the respective components:

- **PumpFun Links**: Update in `HeroSection.tsx`, `CreatorFeeSection.tsx`, and `SocialLinksFooter.tsx`
- **Social Media Links**: Update in `SocialLinksFooter.tsx`
- **Phantom Wallet Link**: Update in `GettingStartedSection.tsx`

### Update Dynamic Values

Replace placeholder values in `components/CollectionQuestSection.tsx`:
- `cardsCollected`
- `estimatedTotalValue`
- `nextTarget`

These can be connected to your backend API later.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Customization

The design uses a custom color palette defined in `tailwind.config.js`. You can adjust:
- Pink color shades
- Gradient configurations
- Shadow effects
- Border radius values

All components are modular and can be easily customized or extended.

