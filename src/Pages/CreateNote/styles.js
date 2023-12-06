import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	width: 100%;

	display: grid;
	grid-template-rows: 105px auto;
	grid-template-areas:
		'header'
		'content';

	main {
		grid-area: content;
		overflow-y: auto;
	}
`;
export const Content = styled.form`
	max-width: 550px;
	margin: 38px auto;

	.titulo {
		display: flex;
		flex-direction: column;
		gap: 19px;

		> h2 {
			margin-bottom: 0;
		}
	}

	.marcadores {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		gap: 19px;
	}

	> Button {
		margin-top: 34px;

		
	}
`;

export const TextHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 38px;
	margin-bottom: 36px;

	> a {
		font-size: 20px;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}
`;

export const InputsNote = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
