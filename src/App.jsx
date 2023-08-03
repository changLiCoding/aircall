import React from "react";

import Header from "./components/Header/index.js";
import ContextWrapper from "./ContextWrapper.jsx";
import Body from "./components/Body/index.js";
import styles from "./css/app.module.css";

function App() {
	return (
		<ContextWrapper>
			<div className={styles.container}>
				<Header />

				<div className={styles.containerView}>
					<Body />
				</div>
			</div>
		</ContextWrapper>
	);
}

export default App;
