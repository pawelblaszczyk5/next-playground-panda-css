import { definePreset } from "@pandacss/dev";
import basePreset from "@pandacss/preset-base";

export const customPreset = () => {
	const { conditions, utilities } = basePreset;

	return definePreset({
		conditions: {
			...conditions,
			hoverAvailable: "@media (hover:hover) and (pointer:fine)",
		},
		theme: {
			tokens: {
				colors: {
					exampleColor: {
						value: "#fff",
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
