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

/* let timer = null;
  let seconds = 0;

  const showTimer = (date) => {
    cronometro.innerText = date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC", // Ou 'GMT'
    });
  };

  const updateTime = (sec) => {
    const date = new Date(sec * 1000);
    showTimer(date);
  };

  const iniciar = () => {
    timer = setInterval(() => {
      seconds++;
      updateTime(seconds);
    }, 1000);
  };

  const zerar = () => {
    clearInterval(timer);
    seconds = 0;
    updateTime(seconds);
  }; */
