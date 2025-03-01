import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import jest from 'eslint-plugin-jest';
import { fixupPluginRules } from '@eslint/compat';
import babelParser from '@babel/eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['./src/**/*.{js,jsx}', 'App.js'],
    plugins: {
      react,
      'react-native': fixupPluginRules({ rules: reactNative.rules }),
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...reactNative.environments['react-native'].globals,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...reactNative.configs.all.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-native/sort-styles': 'off',
      'react-native/no-color-literals': 'off',
    },
  },
  {
    files: ['./src/__tests__'],
    ...jest.configs['flat/recommended'],
  },
];
