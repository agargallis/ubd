// Same Tailwind config as the site, but also scans the social posts.
const path = require('node:path');
const base = require('../tailwind.config.js');

const root = path.join(__dirname, '..');

module.exports = {
  ...base,
  content: [
    path.join(root, 'src/**/*.{js,jsx}'),
    path.join(root, 'social/**/*.{js,jsx,html}'),
  ],
};
