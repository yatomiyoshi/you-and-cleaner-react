import { useEffect, useState } from "react";

const TodoListParent = () => {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch("/api/todos");
      const todoList = await response.json();
      setTodoList(todoList);
    };
    fetchFn();
  }, []);

  return (
    <>
      <h1>{todoList.length}件のTODO</h1>
      <TodoListChild todoList={todoList} />
    </>
  );
};

const TodoListChild = ({ todoList }) => {
  return { todoList };
};
