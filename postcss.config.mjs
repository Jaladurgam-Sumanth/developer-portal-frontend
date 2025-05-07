/** @type {import('postcss-load-config').Config} */
const config = {
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
