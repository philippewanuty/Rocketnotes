import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-rows: 105px 184px 1fr 80px;
	grid-template-columns: 250px 1fr;
	grid-template-areas:
		'brand header'
		'menu search'
		'menu content'
		'newnote content';

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

	> h1 {
		font-size: 24px;
		font-weight: 700;
		color: ${({ theme }) => theme.COLORS.ORANGE};
	}
`;

export const Menu = styled.ul`
	grid-area: menu;

	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 64px;

	font-size: 16px;
	font-weight: 400;

	list-style: none;
	

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

	> li {
		margin-bottom: 24px;
	}
`;

export const NewNote = styled.button`
	grid-area: newnote;

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
	grid-area: search;

	display: flex;
	align-items: center;

	margin: 4rem;
`;

export const Content = styled.div`
	grid-area: content;

	display: flex;
	flex-direction: column;

	padding: 0 4rem 4rem 4rem;

	> Section {
		display: flex;
		flex-direction: column;
		margin-top: 0;
		overflow-y: auto;
	}

`;
