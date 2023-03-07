import Aside from "../../components/Aside";
import Board from "../../components/Board";
import Header from "../../components/Header";
import { Container } from "./style";

const Dashboard = () => {
  return (
    <Container>
      <Aside />
      <div style={{ width: "100%" }}>
        <Header />
        <Board />
      </div>
    </Container>
  );
};

export default Dashboard;
