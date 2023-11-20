import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-rows: 105px 1fr 80px;
	grid-template-columns: 250px 1fr;
	grid-template-areas:
		'brand header'
		'menu content'
		'footer content';

	> Header {
		grid-area: header;
		padding-left: 114px;
	}
`;

export const Brand = styled.div`
	grid-area: brand;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

	border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

	> span {
		font-size: 24px;
		font-weight: 700;
		color: ${({ theme }) => theme.COLORS.ORANGE};
	}
`;

export const Menu = styled.div`
	grid-area: menu;
	display: flex;
	align-items: flex-start;
	justify-content: center;

	padding-top: 64px;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const MenuButtons = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 24px;

	list-style: none;

	font-size: 16px;
	font-weight: 400;

	> li > button {
		background: none;
		border: none;
		color: ${({ theme }) => theme.COLORS.GRAY_100};

		&:hover {
			color: ${({ theme }) => theme.COLORS.ORANGE};
		}
	}
`;

export const NewNote = styled.button`
	grid-area: footer;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 20px;
	font-weight: 400;

	border: 0;

	background-color: ${({ theme }) => theme.COLORS.ORANGE};

	> svg {
		font-size: 24px;
		padding-right: 8px;
	}
`;

export const Search = styled.div`
	background: none;
`;

export const Content = styled.div`
	grid-area: content;

	display: flex;
	flex-direction: column;

	padding: 4rem;

	> Input {
		margin-bottom: 36px;
	}

	> Section {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	> Section > div {
		width: 100%;
		height: 112px;

		padding: 16px 22px;
		border-radius: 10px;

		background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

		> h2 {
			font-size: 24px;
			font-weight: 700;
			color: ${({ theme }) => theme.COLORS.WHITE};

			padding-bottom: 24px;
		}
	}
`;


