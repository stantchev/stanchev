/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-dark': '#121225',
        'cyber-purple': '#9333ea',
        'cyber-pink': '#ec4899',
        'cyber-blue': '#06b6d4',
        'cyber-teal': '#14b8a6',
        'cyber-green': '#10b981',
        'cyber-yellow': '#eab308',
        'cyber-red': '#ef4444',
        'cyber-gray': '#2d2d3f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'text-shimmer': 'text-shimmer 3s ease infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(102, 0, 255, 0.7), 0 0 10px rgba(102, 0, 255, 0.5)' },
          '100%': { boxShadow: '0 0 10px rgba(102, 0, 255, 0.9), 0 0 20px rgba(102, 0, 255, 0.7), 0 0 30px rgba(102, 0, 255, 0.5)' },
        },
        'text-shimmer': {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': { 
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, #9333ea, #ec4899, #06b6d4)',
        'dark-grid': 'linear-gradient(transparent, transparent 49px, #2d2d3f 50px)',
      },
      backgroundSize: {
        'grid-pattern': '50px 50px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f3f4f6',
            'h1, h2, h3, h4, h5, h6': {
              color: '#f9fafb',
            },
            a: {
              color: '#06b6d4',
              '&:hover': {
                color: '#14b8a6',
              },
            },
            strong: {
              color: '#f9fafb',
            },
            code: {
              color: '#ec4899',
            },
          },
        },
      },
    },
  },
  plugins: [],
};