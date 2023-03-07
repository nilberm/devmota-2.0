import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ControlList {
  lists: any;
  setLists: (value: any) => void;
}

export const ControlListContext = createContext({} as ControlList);

export function ControlListProvider({ children }: Props) {
  const [lists, setLists] = useState();

  return (
    <ControlListContext.Provider
      value={{
        lists,
        setLists,
      }}
    >
      {children}
    </ControlListContext.Provider>
  );
}
