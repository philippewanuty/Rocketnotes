import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	display: flex;
	align-items: center;

	border-radius: 10px;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
	color: ${({ theme }) => theme.COLORS.GRAY_300};

	> input {
		height: 56px;
		width: 100%;
		background: transparent;
		border: none;

		padding: 20px 16px;

		color: ${({ theme }) => theme.COLORS.WHITE};

		&:placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
		}
	}

	svg {
		margin-left: 16px;
	}
`;
