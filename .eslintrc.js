module.exports = {
	root: true,
	extends: [
		'eslint-config-graph',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	env: {
		browser: true,
		es6: true,
		jest: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			arrowFunctions: true
		}
	},
	plugins: ['react', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
				paths: ['./src']
			}
		}
	},
	rules: {
		'react/jsx-filename-extension': [1, {extensions: ['.ts', '.tsx']}],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never'
			}
		]
	}
};
