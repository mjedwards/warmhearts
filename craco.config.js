const path = require("path");
const CracoBabelLoader = require("craco-babel-loader");

module.exports = {
	jest: {
		configure: {
			moduleNameMapper: {
				d3: "<rootDir>/src/__mocks__/d3.js",
			},
		},
	},
	plugins: [
		{
			plugin: CracoBabelLoader,
			options: {
				includes: [path.resolve("node_modules/@tanstack/virtual-core")],
				babelPreset: undefined,
				babelOptions: {
					plugins: [
						require.resolve("@babel/plugin-proposal-optional-chaining"),
						require.resolve(
							"@babel/plugin-proposal-nullish-coalescing-operator"
						),
					],
				},
			},
		},
	],
};
