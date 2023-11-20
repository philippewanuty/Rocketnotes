import styled from 'styled-components';

export const Container = styled.input`

  width: 100%;
  height: 56px;
  
  border-radius: 10px;
  border: none;
  padding: 20px 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
`;
