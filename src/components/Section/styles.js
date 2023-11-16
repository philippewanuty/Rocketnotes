import styled from 'styled-components';

export const Container = styled.section`
	margin: 56px 0 28px;
	height: 0px;

	> h2 {
		font-size: 1.25rem;
    font-weight: 400;
    
		color: ${({ theme }) => theme.COLORS.GRAY_100};
		border-bottom: solid 1px ${({ theme }) => theme.COLORS.BACKGROUND_700};

		padding-bottom: 1rem;
		margin-bottom: 1.25rem;
	}
`;