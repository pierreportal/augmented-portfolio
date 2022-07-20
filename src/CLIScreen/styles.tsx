import styled from "styled-components";

export const CLI = styled.div`
	background-color: #262933;
	color: #00ff8b;
	box-sizing: border-box;
	padding: 20px;
	border-radius: 10px;
	width: 90vw;
	height: 90vh;
	overflow-y: scroll;

	& > code {
		font-family: monospace;
	}
	& input {
		margin: 0;
		padding: 0;
		background: none;
		border: none;
		color: green;
		outline: none;
		font-family: monospace;
	}
`;

export const UnknownCMD = styled.span`
	color: red;
`;

export const Prompt = styled.span`
	color: pink;
	margin: 0;
	padding: 0;
`;

export const QuitScreenButton = styled.button`
	position: absolute;
	top: calc(50% - 15px);
	height: 30px;
	width: 100px;
	left: calc(50% - 50px);
	cursor: pointer;
	opacity: 0.2;
	border: none;
	border-radius: 5px;
	font-size: 0.7rem;
	font-weight: 600;
	transition: opacity 0.5s ease;
	&:hover {
		opacity: 0.9;
	}
`;

export const PrintLine = styled.p`
	padding: 3px 0 0 0;
	margin: 0;
`;
