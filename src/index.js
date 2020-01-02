import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";

// imports for redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import Menu from "./components/core/Menu";

// # add routing to the react app
// ReactDOM.render(routing, document.getElementById('root'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// use redux
ReactDOM.render(
	<Provider store={store}>
		<Menu />
	</Provider>,
	document.getElementById("root")
);
// ReactDOM.render(<Provider store={createStore(reducers)}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
