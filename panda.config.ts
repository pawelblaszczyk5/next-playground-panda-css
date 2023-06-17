import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	conditions: {},
	exclude: [],
	include: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	jsxFactory: "styled",
	jsxFramework: "react",
	outdir: "styled-system",
	patterns: {},
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
	utilities: {},
});
