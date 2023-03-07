import styled from "styled-components";

export const Container = styled.div`
  background: ${(props: { themeColor: boolean }) =>
    props.themeColor ? "var(--backgroundDark)" : "var(--backgroundBright)"};
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;

  padding: 0 2rem;

  .buttonAddTask {
    width: 100%;
    display: flex;
    padding: 2em 0;

    button {
      border: none;
      background: var(--primaryColor);
      color: var(--White);
      padding: 1rem 2rem;
      font-size: 1.2rem;
      font-weight: 700;
      border-radius: 10px;
      box-shadow: 0 5px #675784;
      cursor: pointer;
      transition: 0.15s;

      &:active {
        box-shadow: 0 0 #666;
        transform: translateY(4px);
      }
    }
  }

  .GridColumns {
    display: flex;
    padding: 30px;
    height: calc(100% - 210px);
    gap: 2rem;
  }
`;

export const Columns = styled.div`
  padding: 1rem 0;
  flex: 0 0 320px;
  height: 100%;
  color: ${(props: { themeColor: boolean }) =>
    props.themeColor ? "var(--White)" : "var(--Black)"};

  .labelColumn {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1rem 0;

    .cardTask {
      display: flex;
      flex-direction: column;
      background: ${(props: { themeColor: boolean }) =>
        props.themeColor
          ? "var(--secondBackgroundDark)"
          : "var(--secondBackgroundBright)"};
      padding: 1rem;
      border-radius: 10px;
      cursor: grab;
      box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
      border-top: 20px solid rgba(230, 236, 245, 0.5);
      line-height: 20px;
      font-weight: 500;
      min-height: 100px;
    }

    .done {
      opacity: 0.6;
    }
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background: ${(props: { themeColor: any }) =>
    props.themeColor
      ? "var(--secondBackgroundDark)"
      : "var(--secondBackgroundBright)"};
  color: ${(props: { themeColor: any }) =>
    props.themeColor ? "var(--White)" : "var(--Black)"};

  width: 420px;
  border-radius: 10px;

  .header {
    padding: 1rem 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${(props: { themeColor: any }) =>
      props.themeColor ? "2px solid #615c5c;" : "1px solid #615c5c50"};
    transition: 0.3s;

    font-size: 1.2rem;

    button {
      border: none;
      background: none;

      color: ${(props: { themeColor: any }) =>
        props.themeColor ? "var(--White)" : "var(--Black)"};

      font-size: 1.5rem;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem;

    label,
    input {
      width: 100%;
    }

    #taskName {
      background: ${(props: { themeColor: any }) =>
        props.themeColor ? "#777777" : "#FFFFFF"};
      border: ${(props: { themeColor: any }) =>
        props.themeColor ? "none" : "1px solid #777777"};
      border-radius: 5px;
      height: 2rem;
      padding: 0 1rem;
    }

    #taskDescription {
      background: #777777;
      border: ${(props: { themeColor: any }) =>
        props.themeColor ? "none" : "1px solid #777777"};
      border-radius: 5px;
      height: 7rem;
      padding: 0.5rem 1rem;
      background: ${(props: { themeColor: any }) =>
        props.themeColor ? "#777777" : "#FFFFFF"};
    }
  }

  .bottom {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 2rem;
    border-top: ${(props: { themeColor: any }) =>
      props.themeColor ? "2px solid #615c5c;" : "1px solid #615c5c50"};
    transition: 0.3s;

    button {
      background: var(--primaryColor);
      border: none;
      color: var(--White);
      padding: 0.5rem 1.5rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;
