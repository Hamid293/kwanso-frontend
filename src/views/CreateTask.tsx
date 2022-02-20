import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styled/Button";
import { FlexContainer } from "../components/styled/FlexContainer";
import { Heading } from "../components/styled/Heading";
import { TextInput } from "../components/styled/TextInput";
import { Label } from "../components/styled/Label";
import { Task } from "../interfaces/Task";
import { addTask } from "../utils/task";

function CreateTask(): JSX.Element {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const task: Task = {
      name,
    };
    addTask(task);
    navigate("/");
  };
  return (
    <>
      <Heading>Create Task</Heading>
      <form onSubmit={onSubmit}>
        <FlexContainer>
          <Label htmlFor="task">Name</Label>
          <TextInput
            type="text"
            name="task"
            id="task"
            onChange={onNameChange}
            required
          ></TextInput>
          <Button type="submit">Create</Button>
        </FlexContainer>
      </form>
    </>
  );
}

export default CreateTask;
