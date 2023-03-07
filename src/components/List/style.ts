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
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }
  ul {
    margin-top: 30px;
  }
`;
