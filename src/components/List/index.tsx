/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useRef, useState, useEffect } from "react";

import { Container } from "./style";

import Card from "../Card";

import { ControlThemeContext } from "../../context/ControlThemeContext";
import { useDrop } from "react-dnd";
import {
  MdOutlineAdd,
  MdOutlineClose,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { ControlListContext } from "../../context/ControlListContext";

const List = ({ data, indexList, move }: any) => {
  const [toggleAddCard, setToggleAddCard] = useState(false);
  const [handleCardName, setHandleCardName] = useState("");

  const { theme } = useContext(ControlThemeContext);
  const { lastId, setLastId } = useContext(ControlListContext);
  const { lists, setLists } = useContext(ControlListContext);

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

  const handleCreateNewCard = () => {
    const newCard = {
      id: lastId + 1,
      content: handleCardName,
    };

    setLists((prevLists: any) =>
      prevLists.map((column: any) =>
        column.id === data.id
          ? { ...column, cards: column.cards.concat(newCard) }
          : column
      )
    );
    setLastId(lastId + 1);

    //reset and save
    setHandleCardName("");
    setToggleAddCard(false);
  };

  const saveToStorage = () => {
    localStorage.setItem("kanbanObject", JSON.stringify(lists));
    localStorage.setItem("lastId", JSON.stringify(lastId));
  };

  const deleteColumnById = (id: number) => {
    const updatedLists = lists.filter((list: any) => list.id !== id);
    setLists(updatedLists);
  };

  useEffect(() => {
    if (toggleAddCard && inputCardRef.current) {
      inputCardRef.current.focus();
    }
  }, [toggleAddCard]);

  useEffect(() => {
    saveToStorage();
  }, [lastId, lists]);

  const ColumnTitle = (data: any) => {
    const [isEditing, setIsEditing] = useState(false);

    const inputColumnRef = useRef<HTMLInputElement | null>(null);

    const handleEditButtonClick = () => {
      setIsEditing(true);
    };

    const handleEditColumn = (value: string) => {
      const updatedLists = lists.map((list: any) => {
        if (list.id === data.id) {
          return {
            ...list,
            title: value !== "" ? value : data.title,
          };
        } else {
          return list;
        }
      });
      setLists(updatedLists);
      setIsEditing(false);
    };

    useEffect(() => {
      if (isEditing && inputColumnRef.current) {
        inputColumnRef.current.focus();
      }
    }, [isEditing]);

    return (
      <div>
        {isEditing ? (
          <input
            className="inputColumnName"
            type="text"
            defaultValue={data.title}
            onBlur={(v) => handleEditColumn(v.target.value)}
            ref={inputColumnRef}
          />
        ) : (
          <h2 onClick={handleEditButtonClick}>{data.title}</h2>
        )}
      </div>
    );
  };

  return (
    <Container done={data.done} themeColor={theme} ref={drop}>
      <header>
        {ColumnTitle(data)}
        <button onClick={() => deleteColumnById(data.id)}>
          <MdOutlineDeleteOutline />
        </button>
      </header>

      <ul>
        {data.cards.map((card: { id: any }, index: any) => (
          <Card key={card.id} listIndex={indexList} index={index} data={card} />
        ))}

        <div className="addCard">
          {toggleAddCard ? (
            <>
              <div className="cardCreation">
                <input
                  ref={inputCardRef}
                  type="text"
                  maxLength={50}
                  onBlur={() => handleBlurInput()}
                  onChange={(v) => setHandleCardName(v.target.value)}
                />
              </div>
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
            </>
          ) : (
            <button className="columnBtn" onClick={() => handleAddCard()}>
              <MdOutlineAdd size={20} />
              <span>Add another card</span>
            </button>
          )}
        </div>
      </ul>
    </Container>
  );
};

export default List;
