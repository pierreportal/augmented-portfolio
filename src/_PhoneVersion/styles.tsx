import styled from 'styled-components';

export const PhoneAppMainContainer = styled.div`
	alignItems: center;
	display: flex;
	flexDirection: column;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	color: #eff2f4;
	backgroundColor: #2d2d44;

	& > button {
		fontSize: 1.5rem;
		color: red;
		backgroundColor: none;
		position: absolute;
	}

	& > h1 {
		marginTop: 20px;
		fontSize: 1.5em;
		height: 100px;
		width: 200px;
		textAlign: center;
		position: absolute;
		display: flex;
		alignSelf: center;
		{/* position: absolute; */}
		color: red;
	}
`;
