import React, { useState, useCallback } from "react";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(_count => _count + 1), []);
  const decrement = useCallback(() => setCount(_count => _count - 1), []);
  return (
    <>
      <h1>Hello, world!</h1>
      <div>count: {count}</div>
      <ul>
        <li><button onClick={increment}>increment</button></li>
        <li><button onClick={decrement}>decrement</button></li>
      </ul>
    </>
  );
};