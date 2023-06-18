import { css } from "~/styled-system/css";

const HomePage = () => (
	<h1
		className={css({
			_hoverAvailable: {
				_hover: {
					background: "exampleColor",
				},
			},
		})}
	>
		Hello world from PandaCSS
	</h1>
);

export default HomePage;
