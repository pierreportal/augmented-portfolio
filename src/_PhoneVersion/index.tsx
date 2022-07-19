import React from 'react';
import { Works} from './components/Works';
import { PhoneAppMainContainer } from './styles';

(() => {

	const log = console.log.bind(console);
	const error = console.error.bind(console);
	console.log = (...args) => {
		log(...args)
		//var tab = window.open('about:blank', '_blank');
		//tab?.document.write(`<h1>Logs</h1>${args.map((c:string) => `<p><b>${c}<b/></p>`).join('')}`); // where 'html' is a variable containing your HTML
		//tab?.document.close(); // to finish loading the page
	}
	console.error = (...args) => {
		error(...args)
		//var tab = window.open('about:blank', '_blank');
		//tab?.document.write(`<h1>Logs</h1>${args.map((c:string) => `<p><b>${c}<b/></p>`).join('')}`); // where 'html' is a variable containing your HTML
		//tab?.document.close(); // to finish loading the page

	}
})();

export const PhoneVersion:React.FunctionComponent = () => {

	return <PhoneAppMainContainer>
					<Works/>
	</PhoneAppMainContainer>
}
