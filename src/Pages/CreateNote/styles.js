import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
  
`;
export const Content = styled.div`
  width: 550px;
  margin: 0 auto;

  > Section:nth-child(3) > div {
    display: flex;
    flex-direction: column;
    gap: 19px;

    > h2 {
      margin-bottom: 0;
    }

    > div:nth-child(2) {
      border-style: dashed;
      border-width: 2px;
      border-color: ${({ theme }) => theme.COLORS.GRAY_300};
      background-color: transparent;
    }
  }

  > Section:nth-child(4) > div {
    display: flex;
    flex-direction: row;
    gap: 19px;

    > h2 {
      margin-bottom: 0;
    }

    > div:nth-child(2) {
      border-style: dashed;
      border-width: 2px;
      border-color: ${({ theme }) => theme.COLORS.GRAY_300};
      background-color: transparent;
    }
  }

  > Button {
   margin-bottom: 98px;
  }
`;

export const TextHeader = styled.div`

display: flex;
justify-content: space-between;
align-items: center;

margin-top: 38px;
margin-bottom: 36px;
  
`;

export const InputsNote = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
  
  > div:nth-child(2) {
   height: 150px;

   align-items: start;
  }
`;

