import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['src/**/*.{js,ts}'],
  },
  { languageOptions: { sourceType: 'module', globals: globals.node } },
  {
    rules: {
      'no-undef': 'error',
      'prettier/prettier': ['error', { singleQuote: true }],
      'no-unused-vars':
        process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-use-before-define': ['error', { functions: false }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier,
];
