/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        'background-light': '#131320',
        primary: '#C59D5F', // Golden primary
        secondary: '#D4AF37', // Bright gold
        accent: '#F4E4BC', // Light gold
        text: '#E0E0E0',
        'text-dim': '#9E9E9E',
        'text-bright': '#FFFFFF',
        'magical-glow': 'rgba(197, 157, 95, 0.6)', // Golden glow
        'hero-highlight': '#D4AF37', // Bright gold
        'success': '#4CAF50',
        'warning': '#FF9800',
        'error': '#F44336',
      },
      fontFamily: {
        title: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(10, 10, 15, 0.7), rgba(10, 10, 15, 0.9)), url('/src/assets/dota-bg.jpg')",
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(197, 157, 95, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(197, 157, 95, 0.8), 0 0 30px rgba(197, 157, 95, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};