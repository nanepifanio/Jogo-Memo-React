import { MouseEventHandler } from "react";
import restartIcon from "../../assets/restart.svg";
import { Btn } from "./styles";

type Props = {
  resetClick: MouseEventHandler<HTMLDivElement>;
};

export const ResetBtn = ({ resetClick }: Props) => {
  return (
    <Btn onClick={resetClick}>
      <img src={restartIcon} alt="Restart" />
      <button>Reiniciar</button>
    </Btn>
  );
};
