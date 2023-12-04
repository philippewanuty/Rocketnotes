import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 144px auto;

	grid-template-areas:
		'header'
		'content';

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;


export const Header = styled.div`
	grid-area: header;

	width: 100%;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
	
	display: flex;
	align-items: center;

	padding-left: 144px;
	`;

	export const ArrowLeft = styled.a`
	
	
		> svg {
			font-size: 24px;
			color: ${({ theme }) => theme.COLORS.GRAY_100};
		}
	`;

export const Avatar = styled.div`

margin-top: -93px;
	

	img {
		border-radius: 50%;
		width: 186px;
		height: 186px;
	}
`;

export const ChangePhoto = styled.label`
	background: none;
	border: none;
	position: relative;

	width: 48px;
	height: 48px;

	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -48px;
	margin-left: 138px;
	
	cursor: pointer;

	border-radius: 50%;
	background-color: ${({ theme }) => theme.COLORS.ORANGE};

	> svg {
		width: 20px;
		height: 20px;

		color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	}

	> input {

		display: none;
	
	}
`;

export const Form = styled.form`
	grid-area: content;

	display: flex;
	flex-direction: column;

	align-items: center;
`;

export const InputGroup = styled.div`
	width: 340px;
	height: 100vh;

	display: flex;
	flex-direction: column;
	gap: 8px;

	margin-top: 64px;

	> div:nth-child(2) {
		margin-bottom: 16px;
	}

`;
