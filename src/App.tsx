import { useEffect, useState } from "react";
import * as Styled from "./App.styles";
import logo from "./assets/devmemory_logo.png";
import { ResetBtn } from "./components/ResetBtn";
import { Infos } from "./components/InfosArea";
import { items } from "./data/items";
import { Item } from "./components/Item";
import { GridItemType } from "./types/GridItemType";
import { formatTimeElapsed } from "./helpers/formatTimeElapsed";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  // When the page is loaded, exec. the reset and create grid.
  useEffect(() => resetAndCreateGrid(), []);

  // Initiate timer if playing is "true"
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTime(time + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, time]);

  // Check if opened items are equals when showCount === 2
  useEffect(() => {
    if (shownCount === 2) {
      const shownItems: GridItemType[] = gridItems.filter((item) => item.shown);
      if (shownItems.length === 2) {
        const itemsAreEquals: boolean =
          shownItems[0].item === shownItems[1].item;
        const tempGrid = [...gridItems];
        if (itemsAreEquals) {
          for (let i in tempGrid) {
            if (tempGrid[i].shown) {
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }
          setGridItems(tempGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            for (let i in tempGrid) {
              tempGrid[i].shown = false;
            }
            setGridItems(tempGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount(moveCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  // Verify if all items are permanent in screen and close the game
  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((item) => item.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount]);

  const resetAndCreateGrid = () => {
    // Reset
    setTime(0);
    setMoveCount(0);
    setShownCount(0);

    // Create Grid
    // 1º - Create a empty grid array
    const tempGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }

    // 2º - Fill grid array
    for (let w = 0; w < 2; w++) {
      let pos = -1;
      for (let i = 0; i < items.length; i++) {
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = i;
      }
    }

    // 3º - Set in gridItems state
    setGridItems(tempGrid);

    // Start the game
    setPlaying(true);
  };

  const handleItemClick = (index: number) => {
    if (playing && shownCount < 2) {
      const tempGrid = [...gridItems];
      if (!tempGrid[index].permanentShown && !tempGrid[index].shown) {
        tempGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tempGrid);
    }
  };

  return (
    <Styled.Structure>
      <Styled.LeftSide>
        <img src={logo} alt="DevMemory Logo" />

        <Styled.TimerMov>
          <Infos timer timeElapsed={formatTimeElapsed(time)} />
          <Infos movements={moveCount} />
        </Styled.TimerMov>

        <ResetBtn resetClick={resetAndCreateGrid} />
      </Styled.LeftSide>

      <Styled.RightSide>
        {gridItems.map((item, index) => {
          return (
            <Item
              key={index}
              data={item}
              itemClick={() => handleItemClick(index)}
            />
          );
        })}
      </Styled.RightSide>
    </Styled.Structure>
  );
};

export default App;
