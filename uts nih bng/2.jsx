import React, { useState } from "react";

// Komponen menggunakan props
function Title(props) {
  return <h1>{props.title}</h1>;
}

// Komponen menggunakan state
function ButtonCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <p>Count: {count}</p>
    </div>
  );
}

// Penggunaan
function App() {
  return (
    <div>
      <Title title="Welcome to React" />
      <ButtonCounter />
    </div>
  );
}

export default App;
