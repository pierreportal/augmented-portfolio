import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";
const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	headers: {
		Authorization: `bearer ${process.env.REACT_APP_GITHUB_GRAPH_API}`,
	},
	cache: new InMemoryCache(),
});


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
