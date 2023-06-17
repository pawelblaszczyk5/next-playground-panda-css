import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	exclude: [],
	include: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	jsxFactory: "styled",
	jsxFramework: "react",
	outdir: "styled-system",
	preflight: true,
	strictTokens: true,
	theme: {
		recipes: {},
		tokens: {
			colors: {
				test: {
					value: "#222",
				},
			},
			fonts: {
				body: {
					value: "var(--font-inter), var(--font-fallback)",
				},
			},
			spacing: {
				xs: {
					value: "2rem",
				},
			},
		},
	},
});
