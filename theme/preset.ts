import { definePreset } from "@pandacss/dev";
import basePreset from "@pandacss/preset-base";

export const customPreset = () => {
	const { conditions, utilities } = basePreset;

	return definePreset({
		conditions: {
			...conditions,
		},
		theme: {
			tokens: {
				colors: {
					exampleColor: {
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
		utilities: {
			...utilities,
		},
	});
};
