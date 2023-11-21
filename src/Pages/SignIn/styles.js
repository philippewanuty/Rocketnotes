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

export const Login = styled.div`
	grid-area: login;
	display: flex;
	flex-direction: column;
	align-items: center;

	> div:nth-child(1) {
		margin-top: 240px;
    text-align: center;
	
		> h1 {
			font-size: 48px;
			font-weight: 700;
			color: ${({ theme }) => theme.COLORS.ORANGE};
		}

		> span {
			font-size: 14px;
			color: ${({ theme }) => theme.COLORS.GRAY_100};
		}
    
    > ButtonText {
      color: yellow;
    }
	}
`;

export const CoverImage = styled.div`
	grid-area: coverImage;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  overflow: hidden;

	> img {
		object-fit: cover;
		width: 100%;
		height: 100vh;
	}
`;
