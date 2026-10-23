/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        devr: {
          green: 'var(--color-accent)',
          'green-hover': 'var(--color-accent-hover)',
          'green-glow': 'var(--color-accent-glow)',
          'green-text': 'var(--color-accent-text, #000000)',
          bg: 'var(--color-bg)',
          card: 'var(--color-card)',
          'card-hover': 'var(--color-card-hover)',
          border: 'var(--color-border)',
          'text-primary': 'var(--color-text-primary)',
          'text-secondary': 'var(--color-text-secondary)',
          'text-muted': 'var(--color-text-muted)',
          navbar: 'var(--color-navbar)',
          badge: 'var(--color-badge)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'nv-glow': '0 0 15px var(--color-accent-glow)',
        'nv-card': '0 4px 20px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
};
