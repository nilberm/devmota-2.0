import { Container } from "./style";

import { useContext } from "react";
import { ControlThemeContext } from "../../context/ControlThemeContext";

const Header = () => {
  const { theme } = useContext(ControlThemeContext);

  return (
    <Container themeColor={theme}>
      <h2>Platform</h2>
    </Container>
  );
};

export default Header;
