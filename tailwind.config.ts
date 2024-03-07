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
        'brand-img': "url('/bg.jpg')",
        space: "url('/bgspace.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
