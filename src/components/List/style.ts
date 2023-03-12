import styled from "styled-components";

interface PropsColor {
  themeColor: boolean;
}
interface PropsDone {
  done: boolean;
}

export const Container = styled.div`
  padding: 0.5rem 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${(props: PropsDone) => (props.done ? 0.6 : 1)};
  overflow-y: auto;

  /* ::-webkit-scrollbar {
    width: 7px;
    background: #221c2b;
    border-radius: 20px;
  } */

  background: ${(props: PropsColor) =>
    props.themeColor ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"};
  border-radius: 5px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 1.2rem;
      padding: 0 10px;
      color: ${(props: PropsColor) =>
        props.themeColor ? "var(--White)" : "var(--Black)"};
      cursor: pointer;
      letter-spacing: 0.2px;
      word-spacing: 1px;
    }

    button {
      border-radius: 18px;
      color: ${(props: PropsColor) =>
        props.themeColor ? "var(--White)" : "var(--Black)"};
      background: none;
      font-size: 1.4rem;
      border: 0;
      cursor: pointer;
      visibility: hidden;
    }

    &:hover {
      button {
        visibility: visible;
      }
    }

    .inputColumnName {
      background: none;
      border: none;
      color: ${(props: PropsColor) =>
        props.themeColor ? "var(--White)" : "var(--Black)"};
      font-weight: 500;
      font-size: 1.2rem;
      font-family: "Roboto", sans-serif;
      padding: 0 10px;
      letter-spacing: 0.2px;
      word-spacing: 0.1px;
    }
  }
  ul {
    margin-top: 30px;

    .addCard {
      .cardCreation {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        border-radius: 5px;
        margin-bottom: 10px;
        padding: 15px;
        box-shadow: ${(props: PropsColor) =>
          props.themeColor ? "" : "0 1px 4px 0 rgba(192, 208, 230, 0.8);"};
        border-top: 20px solid #38266b;
        background: ${(props: PropsColor) =>
          props.themeColor
            ? "var(--secondBackgroundDark)"
            : "var(--secondBackgroundBright)"};
        color: ${(props: PropsColor) =>
          props.themeColor ? "var(--White)" : "var(--Black)"};

        input {
          border: none;
          font-weight: 500;
          line-height: 20px;
          font-family: "Roboto", sans-serif;
          font-size: 0.85rem;

          color: ${(props: PropsColor) =>
            props.themeColor ? "var(--White)" : "var(--Black)"};
          background: ${(props: PropsColor) =>
            props.themeColor
              ? "var(--secondBackgroundDark)"
              : "var(--secondBackgroundBright)"};
        }
      }

      .buttonsBottom {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .add {
          border: none;
          background: #38266b;
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
          font-size: 1.5rem;
          cursor: pointer;

          display: flex;
          align-items: center;

          &:active {
            transform: scale(0.95);
          }

          color: ${(props: PropsColor) =>
            props.themeColor ? "var(--White)" : "var(--Black)"};
        }
      }

      .columnBtn {
        background: none;
        color: ${(props: PropsColor) =>
          props.themeColor ? "var(--White)" : "var(--Black)"};
        border: none;

        display: flex;
        align-items: center;
        padding: 0.5rem;
        width: 100%;
        gap: 0.5rem;

        font-weight: 500;
        font-family: "Roboto" sans-serif;
        font-size: 1rem;

        cursor: pointer;
        border-radius: 5px;
        transition: all 0.1s;

        &:hover {
          background: #38266b;
          color: white;
          font-weight: 600;
        }
      }
    }
  }
`;
