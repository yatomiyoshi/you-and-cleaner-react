import { useState } from "react";
import { useFetchTodos } from "./useFetchTodos";

export const ExampleTodo = () => {
  const { todoList, isLoading, onFilter } = useFetchTodos();

  const [filterStatus, setFilterStatus] = useState("DOING");
  const handleSelectFilterStatus = (e) => setFilterStatus(e.target.value);
  const handleSubmitStatusFilter = (e) => {
    e.preventDefault();
    onFilter(filterStatus);
  };

  if (isLoading || !todoList) {
    return <p>now on loading...</p>;
  }

  return (
    <div>
      <form className="todoFilter" onSubmit={handleSubmitStatusFilter}>
        <select value={filterStatus} onChange={handleSelectFilterStatus}>
          <option value="DOING">今日やること</option>
          <option value="PARKIGN">いつかやること</option>
          <option value="DONE">できたこと</option>
        </select>
        <button type="submit">絞り込み</button>
      </form>
      <ul className="todoList">
        {todoList.map((todo) => {
          <li key={todo.id}>
            <h2 className="todoTitle">{todo.title}</h2>
            <p className="todoDescription">{todo.description}</p>
            <p className="todoDeadline">{todo.deadline}</p>
            <button className="primaryButton">
              <i className="fa-edit"></i>
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
};
