/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useRef } from "react";

import List from "../List";
import { Container } from "./style";
import BoardContext from "./context";

import { MdOutlineAddToPhotos, MdOutlineClose } from "react-icons/md";

import { loadLists } from "../../services/apiTemp";
import { useState } from "react";
import { ControlThemeContext } from "../../context/ControlThemeContext";
import { ControlListContext } from "../../context/ControlListContext";

const Board = () => {
  const data = loadLists();

  const { lists, setLists } = useContext(ControlListContext);
  const [toggleAddColumn, setToggleAddColumn] = useState(false);
  const [handleColumnName, setHandleColumnName] = useState("");

  const inputColumnRef = useRef<HTMLInputElement | null>(null);

  const [lastId, setLastId] = useState<any>();

  const cachedObject = localStorage.getItem("kanbanObject");
  const cachedId = localStorage.getItem("lastId");

  const checkCache = () => {
    if (cachedObject) {
      setLists(JSON.parse(cachedObject));
    } else {
      setLists(data);
    }

    if (cachedId) {
      setLastId(JSON.parse(cachedId));
    } else {
      setLastId(13);
    }
  };

  useEffect(() => {
    checkCache();
  }, []);

  const move = (
    idColumnDestiny: number,
    indexColumnCurrent: number,
    cardId: number
  ) => {
    setLists((prevLists: any) => {
      const newLists = [...prevLists];
      const card: any = newLists[indexColumnCurrent]?.cards.find(
        (c: any) => c?.id === cardId
      );
      newLists[indexColumnCurrent].cards = newLists[
        indexColumnCurrent
      ].cards.filter((c: any) => c?.id !== cardId);
      newLists[
        lists.findIndex((column: any) => column.id === idColumnDestiny)
      ].cards.push(card);
      return newLists;
    });
  };

  const { theme } = useContext(ControlThemeContext);

  const handleAddColumn = () => {
    setToggleAddColumn(true);
  };

  const handleBlurInput = () => {
    if (handleColumnName === "") {
      setToggleAddColumn(false);
    }
  };

  const handleCancelCreationColumn = () => {
    setToggleAddColumn(false);
    setHandleColumnName("");
  };

  const handleCreateNewColumn = () => {
    const tempColum = {
      id: lastId + 1,
      title: handleColumnName,
      cards: [],
    };

    setLists(lists.concat(tempColum));
    setLastId(lastId + 1);

    //reset and save
    setHandleColumnName("");
    setToggleAddColumn(false);
  };

  const saveToStorage = () => {
    localStorage.setItem("kanbanObject", JSON.stringify(lists));
    localStorage.setItem("lastId", JSON.stringify(lastId));
  };

  useEffect(() => {
    if (toggleAddColumn && inputColumnRef.current) {
      inputColumnRef.current.focus();
    }
  }, [toggleAddColumn]);

  useEffect(() => {
    saveToStorage();
  }, [lastId, lists]);

  return (
    <BoardContext.Provider value={{ lists }}>
      <Container themeColor={theme} toggleAddColumn={toggleAddColumn}>
        {lists?.map((list: any, index: any) => (
          <List key={list.title} indexList={index} data={list} move={move} />
        ))}

        <div className={"addColumnContainer"}>
          {toggleAddColumn ? (
            <div className="columnCreation">
              <input
                ref={inputColumnRef}
                type="text"
                maxLength={50}
                onBlur={() => handleBlurInput()}
                onChange={(v) => setHandleColumnName(v.target.value)}
              />
              <div className="buttonsBottom">
                <button className="add" onClick={() => handleCreateNewColumn()}>
                  Add
                </button>
                <button
                  className="cancel"
                  onClick={() => handleCancelCreationColumn()}
                >
                  <MdOutlineClose />
                </button>
              </div>
            </div>
          ) : (
            <button className="columnBtn" onClick={() => handleAddColumn()}>
              <MdOutlineAddToPhotos size={20} />
              <span>Add another column</span>
            </button>
          )}
        </div>
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
