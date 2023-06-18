import { defineConfig } from "@pandacss/dev";

import { customPreset } from "~/theme/preset";

export default defineConfig({
	exclude: [],
	include: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	jsxFactory: "styled",
	jsxFramework: "react",
	outdir: "styled-system",
	preflight: true,
	presets: [customPreset()],
	strictTokens: true,
});
