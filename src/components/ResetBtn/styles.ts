import styled from "styled-components";

export const Btn = styled.div`
  background-color: #1550ff;
  display: flex;
  color: #fff;
  height: 3.125rem;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.5;
  }

  img {
    max-width: 1.25rem;
    margin: 0 0.9375rem;
  }

  button {
    flex: 1;
    border-left: 0.0625rem solid rgba(255, 255, 255, 0.2);
  }
`;
