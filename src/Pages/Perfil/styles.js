import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-rows: 144px auto;

	grid-template-areas:
		'header'
		'content';

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const ArrowLeft = styled.button`
	width: 50px;
	height: 50px;

	background: none;
	border: none;

	margin-left: 144px;
	margin-top: 47px;

	position: absolute;

	> svg {
		width: 25px;
		height: 25px;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}
`;

export const Header = styled.div`
	grid-area: header;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

	display: flex;
	justify-content: center;
`;

export const Avatar = styled.div`
	margin-top: 51px;
	position: absolute;

	img {
		border-radius: 50%;
		width: 186px;
		height: 186px;
	}
`;

export const ChangePhoto = styled.button`

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

	border-radius: 50%;
	background-color: ${({ theme }) => theme.COLORS.ORANGE};

	> svg {
		width: 20px;
		height: 20px;

		color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	}
`;

export const Content = styled.div`
	grid-area: content;

	width: 100%;
	height: 100vh;

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

	margin-top: 157px;

	> div:nth-child(2) {
		margin-bottom: 16px;
	}

	> div > input {
		color: ${({ theme }) => theme.COLORS.WHITE};
	}
`;
