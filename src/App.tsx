import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import BulkDelete from "./views/BulkDelete";
import CreateTask from "./views/CreateTask";
import NotFound from "./views/NotFound";
import TaskList from "./views/TasksList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/list-tasks" />} />
        <Route path="list-tasks" element={<TaskList />} />
        <Route path="create-task" element={<CreateTask />} />
        <Route path="bulk-delete" element={<BulkDelete />} />
      </Routes>
    </>
  );
}

export default App;
