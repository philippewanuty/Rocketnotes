import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const Container = styled.header`

	grid-area: header;

	width: 100%;
	height: 6.563rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;
	border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};


`;

export const Profile = styled(Link)`
	display: flex;
	align-items: center;

	> img {
		width: 4.375rem;
		height: 4.375rem;

		border-radius: 50%;
	}

	> div {
		display: flex;
		flex-direction: column;
		margin-left: 0.563rem;

		span {
			font-size: 0.875rem;
			font-weight: 400;
			color: ${({ theme }) => theme.COLORS.GRAY_100};
		}

		strong {
			font-size: 1.125rem;
			color: ${({ theme }) => theme.COLORS.WHITE};
			font-weight: 700;
		}
	}
`;

export const Button = styled.button`
	background: none;
	border: none;

	> svg {
		color: ${({ theme }) => theme.COLORS.GRAY_100};
		font-size: 36px;
	}
`;