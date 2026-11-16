/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./docs.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0B',
          2: '#171716',
          soft: '#52524B',
          faint: '#8A8A80',
        },
        paper: '#FBF8F0',
        cream: '#F3EDDF',
        accent: {
          DEFAULT: '#FF5A36',
          deep: '#E8461F',
        },
      },
      fontFamily: {
        sans: ['General Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Bricolage Grotesque', 'General Sans', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        slideIn: {
          from: { opacity: '0', transform: 'translateX(1rem)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeScaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
