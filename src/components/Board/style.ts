import styled from "styled-components";

interface Props {
  done: boolean;
  themeColor: boolean;
  toggleAddColumn: boolean;
}

export const Container = styled.div`
  display: flex;
  padding: 30px;
  height: calc(100% - 100px);
  gap: 1rem;

  overflow-x: auto;

  background: ${(props: Props) =>
    props.themeColor ? "var(--backgroundDark)" : "var(--backgroundBright)"};

  .addColumnContainer {
    padding: 0.5rem 15px;
    flex: 0 0 320px;
    height: ${(props: Props) => (props.toggleAddColumn ? "6rem" : "3rem")};
    opacity: ${(props: Props) => (props.done ? 0.6 : 1)};
    display: flex;
    transition: all 0.3s;

    background: ${(props: Props) =>
      props.themeColor ? "#5235A750" : "#5235A740"};
    border-radius: 5px;

    width: 100%;

    &:hover {
      background: ${(props: Props) =>
        props.themeColor ? "#5235A770" : "#5235A730"};
    }

    .columnBtn {
      display: flex;
      gap: 0.5rem;
      font-size: 1rem;
      font-weight: 600;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s;
      background: none;
      border: none;
      color: ${(props: Props) =>
        props.themeColor ? "var(--White)" : "var(--Black)"};
    }

    .columnCreation {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;

      input {
        width: 100%;
        height: 2.5rem;
        background: ${(props: Props) =>
          props.themeColor ? "#D9D9D9" : "#FFFFFF"};
        border-radius: 2px;
        font-size: 1.2rem;

        border: 3px solid
          ${(props: Props) => (props.themeColor ? "#FFFFFF" : "#5235A7")};
      }

      .buttonsBottom {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .add {
          border: none;
          background: #5235a7;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 3px;
          font-weight: 600;
          cursor: pointer;

          &:active {
            transform: scale(0.95);
          }
        }

        .cancel {
          border: none;
          background: none;
          color: #000;
          font-size: 1.5rem;
          cursor: pointer;

          display: flex;
          align-items: center;

          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  }

  .creatingColumn {
    height: 6rem;
  }
`;
