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
			layerStyles: {
				exampleLayerStyle: {
					description: "example layer style",
					value: {
						border: "1px solid",
						borderColor: "exampleColor",
					},
				},
			},
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
			},
		},
		utilities: {
			...utilities,
		},
	});
};
