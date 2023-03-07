import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;

  background: ${(props: { themeColor: any }) =>
    props.themeColor
      ? "var(--secondBackgroundDark)"
      : "var(--secondBackgroundBright)"};
  color: ${(props: { themeColor: any }) =>
    props.themeColor ? "var(--White)" : "var(--Black)"};
  padding: 2rem;
  font-size: 1.2rem;
  border-bottom: ${(props: { themeColor: any }) =>
    props.themeColor ? "2px solid #615c5c;" : "1px solid #615c5c50"};
  transition: 0.3s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* .buttonAddTask {
    button {
      border: none;
      border-radius: 10px;
      padding: 1rem;

      color: var(--White);

      background: var(--primaryColor);
      cursor: pointer;
      transition: 0.3s;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      font-weight: 700;

      &:active {
        transform: scale(0.95);
      }
    }
  } */
`;
