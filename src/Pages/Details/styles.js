import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
	grid-template-rows: 105px auto;
	grid-template-areas:
		'header'
		'content';

	> main {
		
		grid-area: content;
		overflow-y: auto;
		padding: 64px 0;
		
	
	}
`;



export const Content = styled.div`
	max-width: 550px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;

	> h1 {
		font-size: 2.225rem;
		font-weight: 500;
		padding-top: 4rem;
		color: ${({ theme }) => theme.COLORS.WHITE};
	}

	p {
		padding-top: 1rem;
		padding-bottom: 26px;
		font-size: 1rem;
		font-weight: 400;
		text-align: justify;
	}

	> button:nth-child(1) {
		display: flex;
		align-self: self-end;
	}

	> button:nth-last-child(1) {
		margin-top: 129px;
	
	}
	
`;

export const Links = styled.ul`
	list-style: none;

	> li {
		margin-top: 12px;

		a {
			color: ${({ theme }) => theme.COLORS.WHITE};
		}
	}
`;