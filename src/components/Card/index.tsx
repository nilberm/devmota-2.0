import React, { useContext, useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { Container } from "./style";

import { ControlThemeContext } from "../../context/ControlThemeContext";
import { ControlListContext } from "../../context/ControlListContext";

const Card = ({ data, index, listIndex }: any) => {
  const { theme } = useContext(ControlThemeContext);

  const { lists, setLists } = useContext(ControlListContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { index, listIndex, data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const CardTitle = (data: any) => {
    const [isEditing, setIsEditing] = useState(false);

    const inputCardRef = useRef<any>(null);

    const handleEditButtonClick = () => {
      setIsEditing(true);
    };

    const handleEditCard = (value: string) => {
      if (!value) {
        const updatedLists = lists.map((list: any) => {
          const updatedCards = list.cards.filter(
            (card: any) => card.id !== data.id
          );
          return {
            ...list,
            cards: updatedCards,
          };
        });

        setLists(updatedLists);
        setIsEditing(false);
        return;
      }

      const updatedLists = lists.map((list: any) => {
        const updatedCards = list.cards.map((card: any) => {
          if (card.id === data.id) {
            return {
              ...card,
              content: value,
            };
          } else {
            return card;
          }
        });

        return {
          ...list,
          cards: updatedCards,
        };
      });

      setLists(updatedLists);
      setIsEditing(false);
    };

    useEffect(() => {
      if (isEditing && inputCardRef.current) {
        inputCardRef.current.focus();
        const inputLength = inputCardRef.current.value.length;
        inputCardRef.current.setSelectionRange(inputLength, inputLength);
      }
    }, [isEditing]);

    return (
      <div>
        {isEditing ? (
          <textarea
            className="inputCardName"
            defaultValue={data.content}
            onBlur={(v) => handleEditCard(v.target.value)}
            ref={inputCardRef}
            rows={3}
            cols={30}
            style={{ height: "auto" }}
          />
        ) : (
          <p onClick={handleEditButtonClick}>{data.content}</p>
        )}
      </div>
    );
  };

  return (
    <Container ref={dragRef} isDragging={isDragging} themeColor={theme}>
      {CardTitle(data)}
    </Container>
  );
};

export default Card;
