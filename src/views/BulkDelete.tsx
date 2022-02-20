import { useState, useEffect } from "react";
import { Task } from "../interfaces/Task";
import { Heading } from "../components/styled/Heading";
import { FlexContainer } from "../components/styled/FlexContainer";
import { GlobalStyle } from "../components/GlobalStyle";
import { Card } from "../components/styled/Card";
import { Button } from "../components/styled/Button";
import { RowContainer } from "../components/styled/RowContainer";
import { CheckboxInput } from "../components/styled/CheckboxInput";
import { useNavigate } from "react-router-dom";
import { updateTaskList } from "../utils/task";

function BulkDelete(): JSX.Element {
  const navigate = useNavigate();
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [deleteTaskList, setDeleteTaskList] = useState<boolean[]>([]);

  useEffect(() => {
    const taskList = localStorage.getItem("tasks-list");
    if (taskList) {
      let tasks: Task[] = JSON.parse(taskList);
      setTasksList(tasks);
      setDeleteTaskList(new Array(tasks.length).fill(false));
    }
  }, []);

  const selectItem = (index: number) => {
    const delList = [...deleteTaskList];
    delList[index] = !delList[index];
    setDeleteTaskList(delList);
  };

  const deleteTasks = () => {
    const taskListCopy = [...tasksList];
    for (let i = deleteTaskList.length - 1; i >= 0; i--) {
      if (deleteTaskList[i]) {
        taskListCopy.splice(i, 1);
      }
    }
    updateTaskList(taskListCopy);
    navigate("/");
  };

  return (
    <>
      <Heading>Bulk Delete</Heading>
      <GlobalStyle />
      <FlexContainer>
        <Heading>Tasks List</Heading>
        {tasksList.map((task, index) => {
          return (
            <RowContainer key={index}>
              <CheckboxInput
                type="checkbox"
                onChange={() => selectItem(index)}
                required
              ></CheckboxInput>
              <Card key={index}>{task.name}</Card>
            </RowContainer>
          );
        })}
        <Button onClick={deleteTasks}>Delete</Button>
      </FlexContainer>
    </>
  );
}

export default BulkDelete;
