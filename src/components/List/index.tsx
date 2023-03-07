import React, { useContext, useRef, useState, useEffect } from "react";

import { Container } from "./style";

import Card from "../Card";

import { ControlThemeContext } from "../../context/ControlThemeContext";
import { useDrop } from "react-dnd";
import { MdOutlineAddToPhotos, MdOutlineClose } from "react-icons/md";

const List = ({ data, indexList, move }: any) => {
  const [toggleAddCard, setToggleAddCard] = useState(false);
  const [handleCardName, setHandleCardName] = useState("");

  const { theme } = useContext(ControlThemeContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "CARD",
    drop: (item: any, monitor) => {
      move(data.id, item.listIndex, item.data.id);
    },
    collect: (monitor: { isOver: () => any }) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const inputCardRef = useRef<HTMLInputElement | null>(null);

  const handleAddCard = () => {
    setToggleAddCard(true);
  };

  const handleBlurInput = () => {
    if (handleCardName === "") {
      setToggleAddCard(false);
    }
  };

  const handleCancelCreationCard = () => {
    setToggleAddCard(false);
    setHandleCardName("");
  };

  const handleCreateNewCard = () => {};

  useEffect(() => {
    if (toggleAddCard && inputCardRef.current) {
      inputCardRef.current.focus();
    }
  }, [toggleAddCard]);

  return (
    <Container done={data.done} themeColor={theme} ref={drop}>
      <header>
        <h2>{data.title}</h2>
      </header>

      <ul>
        {data.cards.map((card: { id: any }, index: any) => (
          <Card key={card.id} listIndex={indexList} index={index} data={card} />
        ))}

        <div className="addCard">
          {toggleAddCard ? (
            <div className="cardCreation">
              <input
                ref={inputCardRef}
                type="text"
                maxLength={50}
                onBlur={() => handleBlurInput()}
                onChange={(v) => setHandleCardName(v.target.value)}
              />
              <div className="buttonsBottom">
                <button className="add" onClick={() => handleCreateNewCard()}>
                  Add
                </button>
                <button
                  className="cancel"
                  onClick={() => handleCancelCreationCard()}
                >
                  <MdOutlineClose />
                </button>
              </div>
            </div>
          ) : (
            <button className="columnBtn" onClick={() => handleAddCard()}>
              <MdOutlineAddToPhotos size={20} />
              <span>Add another card</span>
            </button>
          )}
        </div>
      </ul>
    </Container>
  );
};

export default List;
