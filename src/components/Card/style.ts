import styled, { css } from "styled-components";

interface PropsColor {
  themeColor: boolean;
}

export const Container = styled.div`
  position: relative;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: ${(props: PropsColor) =>
    props.themeColor ? "" : "0 1px 4px 0 rgba(192, 208, 230, 0.8);"};
  border-top: 20px solid #38266b;
  cursor: grab;
  background: ${(props: PropsColor) =>
    props.themeColor
      ? "var(--secondBackgroundDark)"
      : "var(--secondBackgroundBright)"};
  color: ${(props: PropsColor) =>
    props.themeColor ? "var(--White)" : "var(--Black)"};

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  .inputCardName {
    background: none;
    border: none;
    color: ${(props: PropsColor) =>
      props.themeColor ? "var(--White)" : "var(--Black)"};
    font-weight: 500;
    font-size: 0.9rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.2px;
    word-spacing: 0.1px;
    width: 100%;
  }

  ${(props: { isDragging: any }) =>
    props.isDragging &&
    css`
      border: 2px dashed
        ${(props: PropsColor) =>
          props.themeColor ? "#FFFFFF" : "rgba(0, 0, 0, 0.4)"};
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      header {
        opacity: 0;
      }
    `}
`;
