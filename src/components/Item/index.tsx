import b7 from "../../assets/b7.svg";
import * as Styled from "./styles";
import { GridItemType } from "../../types/GridItemType";
import { items } from "../../data/items";

type Props = {
  data: GridItemType;
  itemClick: () => void;
};

export const Item = ({ data, itemClick }: Props) => {
  return (
    <Styled.ItemArea
      onClick={itemClick}
      bgToggle={data.shown || data.permanentShown}
    >
      {!data.permanentShown && !data.shown && (
        <Styled.Icon src={b7} alt="B7 Icon" b7Icon />
      )}

      {(data.permanentShown || data.shown) && data.item !== null && (
        <Styled.Icon src={items[data.item].icon} alt={items[data.item].name} />
      )}
    </Styled.ItemArea>
  );
};
