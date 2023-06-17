import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	clean: true,
	exclude: [],
	include: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	jsxFactory: "styled",
	jsxFramework: "react",
	outdir: "styled-system",
	patterns: {
		test: {
			properties: {
				// only allow row and column
				direction: { type: "enum", value: ["row", "column"] },
			},
		},
	},
	preflight: true,
	strictTokens: true,
	theme: {
		tokens: {
			fonts: {
				body: {
					value: "var(--font-inter), var(--font-fallback)",
				},
			},
		},
	},
});
