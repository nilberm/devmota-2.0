import React, { useContext } from "react";
import { useDrag } from "react-dnd";
import { Container } from "./style";

import { ControlThemeContext } from "../../context/ControlThemeContext";

const Card = ({ data, index, listIndex }: any) => {
  const { theme } = useContext(ControlThemeContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { index, listIndex, data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} isDragging={isDragging} themeColor={theme}>
      <p>{data.content}</p>
    </Container>
  );
};

export default Card;
