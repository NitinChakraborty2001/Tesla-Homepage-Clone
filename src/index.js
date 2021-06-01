import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If You Want Your Application To Work Offline & Load Faster, You Can Change
// unregister() To register() Below. Note This Comes With Some Pitfalls.
// Learn More About Service Workers: https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md
serviceWorker.unregister();
