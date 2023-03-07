import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ControlList {
  lists: any;
  setLists: (value: any) => void;
  lastId: any;
  setLastId: (value: any) => void;
}

export const ControlListContext = createContext({} as ControlList);

export function ControlListProvider({ children }: Props) {
  const [lists, setLists] = useState();
  const [lastId, setLastId] = useState<any>();

  return (
    <ControlListContext.Provider
      value={{
        lists,
        setLists,
        lastId,
        setLastId,
      }}
    >
      {children}
    </ControlListContext.Provider>
  );
}
