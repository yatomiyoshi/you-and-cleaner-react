import { useState, useEffect } from "react";

export const useFetchTodos = () => {
  const [query, setQuery] = useState({
    isLoading: false,
    error: null,
    todoList: undefined,
  });

  const [filterStatus, setFilterStatus] = useState("DOING");

  useEffect(() => {
    setQuery((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const fetchFn = async () => {
      try {
        const response = await fetch(`/api/todos&filter=${filterStatus}`);
        const todoList = await response.json();
        setQuery((prev) => ({
          ...prev,
          isLoading: false,
          todoList,
        }));
      } catch (error) {
        setQuery((prev) => ({
          ...prev,
          isLoading: false,
          error: error,
        }));
      }
    };
    fetchFn();
  }, [filterStatus]);

  const { error, todoList, isLoading } = query;
  return {
    error,
    todoList,
    isLoading,
    onFilter: setFilterStatus,
  };
};
