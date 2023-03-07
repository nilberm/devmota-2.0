import { ControlThemeProvider } from "./context/ControlThemeContext";
import GlobalStyled from "./styles/global";
import Dashboard from "./views/Dashboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ControlListProvider } from "./context/ControlListContext";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ControlListProvider>
        <ControlThemeProvider>
          <Dashboard />
          <GlobalStyled />
        </ControlThemeProvider>
      </ControlListProvider>
    </DndProvider>
  );
}

export default App;
