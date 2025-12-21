// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },

    rules: {
      // ✅ дозволяє _next, _req, _err тощо
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];

// import js from '@eslint/js';
// import globals from 'globals';

// export default [
//   js.configs.recommended,
//   {
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       globals: {
//         ...globals.node,
//       },
//     },
//   },
// ];
