import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "src/graphQLQuery.js",
	output: {
		file: "dist/bundle.js",
		format: "esm",
	},
	plugins: [nodeResolve(), commonjs()],
	external: ["mle-js-oracledb", "oracledb"],
};
