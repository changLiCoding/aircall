module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["airbnb", "airbnb/hooks", "plugin:react/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["import", "react"],
	rules: {
		indent: "off",
		"no-tabs": "off",
		quotes: "off",
		"comma-dangle": "off",
		"react/prop-types": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"react/jsx-indent": "off",
		"no-unused-vars": "warn",
		"react/jsx-indent-props": "off",
		"jsx-quotes": "off",
		"implicit-arrow-linebreak": "off",
		"no-confusing-arrow": "off",
		"function-paren-newline": "off",
		"react/react-in-jsx-scope": 0,
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				"": "never",
				ts: "never",
				tsx: "never",
			},
		],
		"import/prefer-default-export": "off",
		"no-underscore-dangle": "off",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false,
				packageDir: ["./"],
			},
		],
		"react/require-default-props": [
			"error",
			{ ignoreFunctionalComponents: true },
		],
		"react/jsx-props-no-spreading": "off",
	},

	ignorePatterns: [
		".eslintrc.js",
		"webpack.config.js",
		"node_modules/",
		"Header.jsx",
		"App.jsx",
		"index.js",
	],
};
