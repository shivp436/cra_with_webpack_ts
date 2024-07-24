module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
    // 'plugin:eslint-comments/recommended',
    // 'prettier/@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
          
    // Enforce strict equality checks (=== and !==)
    'eqeqeq': 'error',
    
    // Disallow unused variables
    'no-unused-vars': 'error',
  
    // Prefer const over let when variable is not reassigned
    'prefer-const': ['error', { 'ignoreReadBeforeAssign': true }],
  
    // Enforce consistent indentation (adjust '2' to your preference)
    'indent': ['warn', 2],
  
    // Require semicolons at the end of statements
    'semi': ['error', 'always'],
  
    // Enforce single quotes for string literals
    'quotes': ['error', 'single'],
  
    // Require trailing commas in multiline object literals and arrays
    'comma-dangle': ['error', 'always-multiline'],
  
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
  
    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
  
    // Require spacing after keywords like if, else, etc.
    //'keyword-spacing': 'warn',
  
    // Require space before function parentheses
    // 'space-before-function-paren': ['error', 'always'],
  
    // Disallow unused expressions (e.g., `a + b;` without assignment)
    'no-unused-expressions': 'error',
  
    // Disallow unnecessary ternary expressions
    'no-unneeded-ternary': 'warn',
  
    // Enforce consistent return values in array callbacks
    'array-callback-return': 'warn',
  
    // Require constructor names to begin with a capital letter (for classes)
    'new-cap': ['error', { 'newIsCap': true }],
  
    // Disallow reassigning function parameters
    // 'no-param-reassign': 'error',
  
    // Enforce a maximum line length
    'max-len': ['warn', { 'code': 200 }],
  
    // Disallow console.log and other console methods in production
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
}