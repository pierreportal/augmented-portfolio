import React from "react";
import { CLI, UnknownCMD, Prompt, QuitScreenButton, PrintLine } from "./styles";
import { enterCmd } from "./cliCtr";

interface ICLIScreenProps {
	quit: (event: any) => void;
}

interface ICLIPrint {
	cmd: string;
	fb: any;
	output?: any;
	location: string;
}

export const CLIScreen: React.FunctionComponent<ICLIScreenProps> = ({
	quit,
}) => {
	const [location, setLocation] = React.useState<string>(
		"#/Users/pierreportal"
	);

	const [inputValue, setInputValue] = React.useState<string>("");

	const [history, setHistory] = React.useState<Array<ICLIPrint>>([]);

	const cliInput = React.useRef(null);

	const handleValue = (event: any) => setInputValue(event.target.value);

	const handleFocus = () => (cliInput?.current as any)?.focus();

	React.useEffect(() => (cliInput?.current as any)?.focus(), [cliInput]);

	const handleKeys = (event: any) => {
		const { key, ctrlKey } = event;
		const { value } = event.target;

		if (ctrlKey) {
			switch (key) {
				case "c":
					setHistory([
						...history,
						{ cmd: value, fb: "abort", location },
					]);
					setInputValue("");
					break;
			}
		}

		switch (key) {
			case "Enter":
				enterCmd(location, value, (c: any) => {
					if (!c) {
						setHistory([
							...history,
							{
								cmd: value,
								fb: "Invalid command",
								location: location,
							},
						]);
						return;
					}

					setHistory([...history, { cmd: value, fb: c, location }]);
					if (value.split(" ")[0] === "cd") {
						setLocation(c);
					}
				});
				setInputValue("");
		}
	};

	return (
		<CLI onClick={handleFocus}>
			<QuitScreenButton onClick={quit}>Leave computer</QuitScreenButton>
			<code>
				{history.map((h: any, i: number) => (
					<>
						<PrintLine key={i}>
							{h.cmd === "ls" ? (
								<>
									<Prompt>{h.location}$</Prompt> {h.cmd}
									<span style={{ display: "block" }}>
										{h.fb.map((x: any) => (
											<span
												style={{
													textDecoration:
														x.type === "object"
															? "underline"
															: "none",
													color:
														x.type === "string"
															? "cyan"
															: "red",
													marginRight: "20px",
												}}
												key={x.name + `${i}`}
											>
												{x.name}
											</span>
										))}
									</span>
								</>
							) : h.fb.startsWith("Unknown command") ? (
								<>
									<Prompt>{h.location}$</Prompt> {h.cmd}
									<span style={{ display: "block" }}>
										<UnknownCMD>{`Unknown command "${h.cmd}"`}</UnknownCMD>
									</span>
								</>
							) : h.fb === "Invalid command" ? (
								<>
									<Prompt>{h.location}$</Prompt> {h.cmd}
									<span style={{ display: "block" }}>
										<UnknownCMD>{`Error: "${h.cmd}"`}</UnknownCMD>
									</span>
								</>
							) : (
								<>
									<Prompt>{h.location}$</Prompt> {h.cmd}
									{h.output}
								</>
							)}
						</PrintLine>
					</>
				))}
				<Prompt>{location}$ </Prompt>
				<input
					ref={cliInput}
					value={inputValue}
					onChange={handleValue}
					type="text"
					onKeyDown={handleKeys}
				/>
			</code>
		</CLI>
	);
};
