import styled from 'styled-components';



export const Container = styled.div`
	display: grid;
  grid-template-columns: 637px auto;

	grid-template-areas:
		'login coverImage';
		

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	width: 100%;
	height: 100vh;
	
`;

export const LoginSection = styled.div`
	grid-area: login;

	display: flex;
	flex-direction: column;
	align-items: center;

`;

export const LoginText = styled.div`
	margin-top: 240px;

	display: flex;
	flex-direction: column;
	align-items: center;

	> h1 {
		font-size: 48px;
		font-weight: 700;
		color: ${({ theme }) => theme.COLORS.ORANGE};
	}

	> span {
		font-size: 14px;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
		margin-bottom: 48px;
	}
`;

export const Login = styled.div`
	width: 340px;

	display: flex;
	flex-direction: column;
	align-items: center;

	> button:nth-child(1) {
		font-size: 24px;
		font-family: 500;
		color: ${({ theme }) => theme.COLORS.WHITE};
		margin-bottom: 48px;
	}

	> button:nth-child(3) {
		margin-top: 24px;
	}

	> button:nth-child(4) {
		font-size: 16px;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.ORANGE};

		margin-top: 80px;
	}
`;

export const LoginInput = styled.div`

width: 100%;
display: flex;
flex-direction: column;
gap: 6px;

`;


export const CoverImage = styled.div`
	grid-area: coverImage;
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;

	> img {
		object-fit: cover;
		width: 100%;
		height: 100vh;
	}
`;

export const ImageCover = styled.div`

		position: absolute;
		width: 100%;
		height: 100%;
		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900_T};
	
`;


