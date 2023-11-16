import styled from 'styled-components';

export const Container = styled.span`
  padding: 5px 14px;
  margin-right: 6px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
