import React from "react";

import Header from "./components/Header/index.js";
import ContextWrapper from "./ContextWrapper.jsx";
import Body from "./components/Body/index.js";

function App() {
	return (
		<ContextWrapper>
			<div className='container'>
				<Header />

				<Body />
				<div className='container-view'>Some activities should be here</div>
			</div>
		</ContextWrapper>
	);
}

export default App;
