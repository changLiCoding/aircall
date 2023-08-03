import React from "react";

import Header from "./components/Header/index.js";
import ContextWrapper from "./ContextWrapper.jsx";
import Body from "./components/Body/index.js";
import styles from "./css/app.module.css";
import BottomNavigationComponent from "./components/BottomNavigationComponent/BottomNavigationComponent.jsx";

function App() {
	return (
		<ContextWrapper>
			<div className={styles.container}>
				<Header />

				<div className={styles.containerView}>
					<Body />
				</div>
				<BottomNavigationComponent />
			</div>
		</ContextWrapper>
	);
}

export default App;
