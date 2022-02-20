import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styled/Button";
import { Card } from "../components/styled/Card";
import { FlexContainer } from "../components/styled/FlexContainer";
import { Heading } from "../components/styled/Heading";
import { Task } from "../interfaces/Task";

function TaskList(): JSX.Element {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const taskList = localStorage.getItem("tasks-list");
    if (taskList) {
      let tasks: Task[] = JSON.parse(taskList);
      setTasksList(tasks);
    }
  }, []);

  return (
    <>
      <FlexContainer>
        <Heading>Tasks List</Heading>
        {tasksList.map((task, index) => {
          return <Card key={index}>{task.name}</Card>;
        })}
        <br />
        <Button
          onClick={() => {
            navigate("/create-task");
          }}
        >
          Create Task
        </Button>
        <Button
          onClick={() => {
            navigate("/bulk-delete");
          }}
        >
          Delete Tasks
        </Button>
      </FlexContainer>
    </>
  );
}

export default TaskList;
