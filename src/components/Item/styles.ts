import styled, { css } from "styled-components";

type ItemProps = {
  bgToggle: boolean;
};

export const ItemArea = styled.div<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bgToggle ? "#1550ff" : "#e2e3e3")};
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
  cursor: pointer;

  ${(props) =>
    props.bgToggle &&
    css`
      animation: rotateItem 1s ease 1;
    `}

  ${(props) =>
    !props.bgToggle &&
    css`
      animation: returnRotate 1s ease 1;
    `}

  @keyframes rotateItem {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }

  @keyframes returnRotate {
    from {
      transform: rotate3d(0, 1, 0, 180deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
`;

type IconProps = {
  b7Icon?: boolean;
};

export const Icon = styled.img<IconProps>`
  width: 2.5rem;
  height: 2.5rem;

  ${(props) =>
    props.b7Icon &&
    css`
      opacity: 0.1;
    `}
`;
