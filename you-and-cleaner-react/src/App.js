import "./App.css";
import { ExampleTodo } from "./ch04/ExampleTodo";
import { ThreeMinutesTimer } from "./ch04/ThreeMinutesTimer";
import { ComparingBetweenInsideAndOutsideExample } from "./ch10/TestReactKey";

function App() {
  return (
    <>
      <div className="App"></div>
      <ExampleTodo />
      <ThreeMinutesTimer />
      <ComparingBetweenInsideAndOutsideExample />
    </>
  );
}

export default App;
