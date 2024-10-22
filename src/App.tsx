import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { PageTitle } from "./components/PageTitle";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);

  return (
    <>
      <PageTitle title="PR-Agent Sample" />
      <div className="card">
        <Button label="increment" onClick={increment} />
        <Button label="decrement" onClick={decrement} />
        <p>count: {count}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
