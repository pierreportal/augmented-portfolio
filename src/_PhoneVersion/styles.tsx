import styled from 'styled-components';

export const PhoneAppMainContainer = styled.div`

	alignItems: center;
	display: flex;
	flexDirection: column;
	width: 100vw;
	height: 100vh;
	color: #eff2f4;
	backgroundColor: #2d2d44;

	& .a-enter-vr {
		display: none;
	}


	& > button {
		fontSize: 1.5rem;
		color: red;
		backgroundColor: none;
		position: absolute;
	}

`;
