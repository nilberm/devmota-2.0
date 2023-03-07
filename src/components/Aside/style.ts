import styled from "styled-components";

export const Container = styled.div`
  background: ${(props: { themeColor: any }) =>
    props.themeColor
      ? "var(--secondBackgroundDark)"
      : "var(--secondBackgroundBright)"};
  height: 100%;
  border-right: ${(props: { themeColor: any }) =>
    props.themeColor ? "1px solid #615c5c;" : "1px solid #615c5c50"};

  width: ${(props: { retract: boolean }) => (props.retract ? "250px" : "60px")};
  transition: 0.3s ease-in-out;

  display: flex;
  flex-direction: column;

  color: var(--White);

  aside {
    height: 100%;
  }

  .navExpanded {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;
    height: calc(100% - 100px);

    nav ul li {
      background: var(--primaryColor);
      padding: 0 2rem 0 3rem;
      margin-left: -2rem;
      border-top-right-radius: 33px;
      border-bottom-right-radius: 33px;

      font-size: 1.2rem;
      font-weight: 700;

      height: 3rem;
      display: flex;
      align-items: center;
    }

    .arrowIcon {
      button {
        transform: rotate(-90deg);
      }
    }
  }
  .navShrunken {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    justify-content: space-between;
    height: calc(100% - 100px);

    .arrowIcon {
      button {
        transform: rotate(90deg);
      }
    }

    nav ul li {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--primaryColor);
    }
  }

  .switchTheme {
    width: 100%;
    background: ${(props: { themeColor: any }) =>
      props.themeColor ? "var(--darkColor)" : "var(--brightColor)"};
    display: flex;
    justify-content: ${(props: { retract: boolean }) =>
      props.retract ? "space-between" : "center"};
    align-items: center;
    color: ${(props: { themeColor: any }) =>
      props.themeColor ? "var(--White)" : "var(--Black)"};
    padding: 0.5rem 1rem;
    margin: 2rem 0 1rem 0;

    border-radius: 12px;

    button {
      color: ${(props: { themeColor: any }) =>
        props.themeColor ? "var(--White)" : "var(--Black)"};

      background: none;
      border: none;
      font-size: 1.22rem;
      cursor: pointer;
    }
  }

  .arrowIcon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;

    button {
      background: none;
      border: none;
      font-size: 2rem;
      color: var(--primaryColor);
      transition: 0.5s ease-out;
      height: 1rem;
    }
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: ${(props: { retract: boolean }) =>
      !props.retract ? "70%" : "100%"};
  }
`;
