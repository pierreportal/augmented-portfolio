import React from "react";
import { Works } from "./components/Works";
import "./mobile-style.css";
import { PhoneAppMainContainer } from "./styles";

(() => {
	const log = console.log.bind(console);
	const error = console.error.bind(console);
	console.log = (...args) => {
		var request = new XMLHttpRequest();
		request.open("GET", "http://192.168.178.20:4444");
		request.send();
		log(...args);
	};
	console.error = (...args) => {
		error(...args);
	};
})();

export const PhoneVersion: React.FunctionComponent = () => {
	console.log("testing logs...");
	return (
		<PhoneAppMainContainer>
			<div id="content">
				<h1>AR Phone Version in construction...</h1>
				<p>
					Check out the desktop version and have a look at{" "}
					<a href="https://www.github.com/pierreportal">
						my work here
					</a>
				</p>
			</div>
			<Works />
		</PhoneAppMainContainer>
	);
};
