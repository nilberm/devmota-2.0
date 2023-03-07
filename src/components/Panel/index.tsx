/* eslint-disable array-callback-return */
import { Columns, Container, ModalContent } from "./style";

import { useContext, useEffect, useState } from "react";
import { ControlThemeContext } from "../../context/ControlThemeContext";
import { FaCircle, FaWindowClose } from "react-icons/fa";
import { api } from "../../services/api";
import { Modal } from "@mui/material";

// import { useDrag } from "react-dnd/dist/hooks";

interface Tasks {
  id: number;
  taskName: string;
  taskDescription: string;
  taskStatus: string;
}

const Panel = () => {
  const [tasks, setTasks] = useState([] as Tasks[]);
  const [tasksTODO, setTasksTODO] = useState([] as Tasks[]);
  const [tasksDOING, setTasksDOING] = useState([] as Tasks[]);
  const [tasksDONE, setTasksDONE] = useState([] as Tasks[]);

  const { theme } = useContext(ControlThemeContext);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleTasks = async () => {
    await api
      .get("tasks")
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
        setTasksTODO(
          response.data.filter((task: Tasks) => {
            if (task.taskStatus === "TODO") {
              return task;
            }
          })
        );
        setTasksDOING(
          response.data.filter((task: Tasks) => {
            if (task.taskStatus === "DOING") {
              return task;
            }
          })
        );
        setTasksDONE(
          response.data.filter((task: Tasks) => {
            if (task.taskStatus === "DONE") {
              return task;
            }
          })
        );
      })
      .catch((errors: any) => {
        console.error(errors);
      });
  };

  // const [{ isDragging }, dragRef] = useDrag({
  //   type: "CARD",
  //   collect: (monitor: { isDragging: () => any }) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  useEffect(() => {
    handleTasks();
  }, []);

  return (
    <Container themeColor={theme}>
      <div className="GridColumns">
        {tasks?.map((task) => {
          return task.taskStatus === "TODO" ? (
            <Columns themeColor={theme}>
              <div className="labelColumn">
                <FaCircle color="0986F9" /> <span>TODO (0)</span>
              </div>
              <div className="cards">
                {tasksTODO?.map((task) => {
                  return <div className="cardTask">{task.taskName}</div>;
                })}
              </div>
            </Columns>
          ) : task.taskStatus === "DOING" ? (
            <Columns themeColor={theme}>
              <div className="labelColumn">
                <FaCircle color="DCFF51" /> <span>DOING (0)</span>
              </div>
              <div className="cards">
                {tasksDOING?.map((task) => {
                  return <div className="cardTask">{task.taskName}</div>;
                })}
              </div>
            </Columns>
          ) : task.taskStatus === "DONE" ? (
            <Columns themeColor={theme}>
              <div className="labelColumn">
                <FaCircle color="66D730" /> <span>DONE (0)</span>
              </div>
              <div className="cards">
                {tasksDONE?.map((task) => {
                  return <div className="cardTask done">{task.taskName}</div>;
                })}
              </div>
            </Columns>
          ) : (
            ""
          );
        })}
      </div>

      <Modal open={open} onClose={handleClose}>
        <ModalContent themeColor={theme}>
          <div className="header">
            <h3>Create Task</h3>
            <button onClick={() => handleClose()}>
              <FaWindowClose />
            </button>
          </div>
          <div className="form">
            <label htmlFor="taskName">Task name</label>
            <input type="text" id="taskName" />
            <label htmlFor="taskName">Task Description</label>
            <textarea cols={40} rows={5} id="taskDescription" />
          </div>
          <div className="bottom">
            <button>Create</button>
          </div>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Panel;
