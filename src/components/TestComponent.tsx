import { useState } from "react";
function TestComponent() {
  const [count, setCount] = useState(0);
  const clickHandlder = (): void => setCount((prevCount) => prevCount + 1);

  return (
    <div className="test">
      <div className="controlPanel">
        <button onClick={() => clickHandlder()}>MONSTER DANCE</button>
      </div>
      <h1>Hello WonderLand!!{count}</h1>
    </div>
  );
}

export default TestComponent;
