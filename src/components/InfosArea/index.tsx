import { InfosArea } from "./styles";

type Props = {
  timer?: boolean;
  timeElapsed?: string;
  movements?: number;
};

export const Infos = ({ timer, timeElapsed, movements }: Props) => {
  return (
    <InfosArea>
      <div>
        <p>{timer ? "Tempo" : "Movimentos"}</p>
        <div>{timer ? timeElapsed : movements}</div>
      </div>
    </InfosArea>
  );
};
