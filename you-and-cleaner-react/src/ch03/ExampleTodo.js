import { useState } from "react";

import { CreateTodoDialog } from "./CreateTodoDialog";
import { UpdateTodoDialog } from "./UpdateTodoDialog";

export const ExampleTodo = () => {
  const todoList = [];
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <div>
      <button
        className="primaryButton"
        onClick={() => setIsCreateDialogOpen(true)}
      >
        <i className="fa-edit" />
        新規作成
      </button>
      <ul className="todoList">
        {todoList.map((todo) => {
          <li key={todo.id}>
            <h2 className="todoTitle">{todo.title}</h2>
            <p className="todoDescription">{todo.description}</p>
            <p className="todoDeadline">{todo.deadline}</p>
            <button
              className="primaryButton"
              onClick={() => setIsEditDialogOpen(true)}
            >
              <i className="fa-edit"></i>
            </button>
          </li>;
        })}
      </ul>
      <CreateTodoDialog
        open={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
      />
      <UpdateTodoDialog
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
      />
    </div>
  );
};
