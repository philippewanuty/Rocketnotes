import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 10px;
	padding-right: 16px;
	border: ${({ theme, isnew }) => (isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none')};
	background-color: ${({ theme, isnew }) => (isnew ? 'transparent' : theme.COLORS.BACKGROUND_900)};

	> input {
		background: none;
		height: 56px;
		width: 100%;
		padding: 0px 12px 0 18px;
		border: none;
		color: ${({ theme }) => theme.COLORS.WHITE};

		&::placeholder {
			color:${({ theme }) => theme.COLORS.GRAY_30};
		}
	}

	> button {
		background: none;
		border: none;

		> svg {
			font-size: 22px;
		}
	}

	.button-delete {
		color: ${({ theme }) => theme.COLORS.ORANGE};
	}

	.button-add {
		color: ${({ theme }) => theme.COLORS.RED};
	}
`;
