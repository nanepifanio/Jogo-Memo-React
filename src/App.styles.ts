import styled from "styled-components";

export const Structure = styled.div`
  padding: 2.5rem 0;
  max-width: 750px;
  margin: auto;
  display: grid;
  grid-template-columns: 12.5rem 1fr;
  column-gap: 6.25rem;

  @media (max-width: 46.875rem) {
    grid-template-columns: 1fr;
    row-gap: 3.125rem;
    padding: 2.5rem 0.625rem;
  }
`;

export const LeftSide = styled.div`
  img {
    max-width: 12.5rem;
  }

  @media (max-width: 46.875rem) {
    text-align: center;

    img {
      margin: auto;
    }
  }
`;

export const TimerMov = styled.div`
  @media (max-width: 46.875rem) {
    display: flex;
    justify-content: space-between;
  }
`;

export const RightSide = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  align-content: space-between;

  @media (max-width: 29.375rem) {
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
  }
`;
