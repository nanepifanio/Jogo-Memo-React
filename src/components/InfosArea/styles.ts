import styled from "styled-components";

export const InfosArea = styled.div`
  margin: 30px 0;

  p,
  div {
    margin: 0;
  }

  p {
    font-size: 0.9375rem;
    color: #9da3ac;
  }

  div {
    font-size: 2.3125rem;
    font-weight: bold;
  }

  @media (max-width: 46.875rem) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
