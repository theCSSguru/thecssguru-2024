import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#ff00fe',
        'brand-secondary': '#bcffff',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'brand-radial':
          'radial-gradient(85% 80% at 20% -5%, #000 0%, #000 52%, #BCFFFF 66%, #FF00FE 85%, #000 100%)',
        'brand-img': "url('/bg.jpg')",
        'brand-nav-highlight':
          'radial-gradient(50% 50% at 50% 50%, rgba(188, 255, 255, 0.40) 0%, rgba(188, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
