module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'no-extra-semi': 'warn',
        'semi-spacing': ['error', {'before': false, 'after': true}]
    }
};
