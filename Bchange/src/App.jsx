import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: color }}
      className="h-screen w-full"
    >

      <div className="btn">
      <div className="flex gap-4 p-4">
        <button
          onClick={() => setColor("pink")}
          className="bg-pink-400 p-4 rounded-xl"
        >
          P
        </button>

        <button
          onClick={() => setColor("green")}
          className="bg-green-400 p-4 rounded-xl"
        >
          G
        </button>

        <button
          onClick={() => setColor("red")}
          className="bg-red-400 p-4 rounded-xl"
        >
          R
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-400 p-4 rounded-xl"
        >
          Y
        </button>

        <button
          onClick={() => setColor("orange")}
          className="bg-orange-400 p-4 rounded-xl"
        >
          O
        </button>

        <button
          onClick={() => setColor("indigo")}
          className="bg-indigo-400 p-4 rounded-xl"
        >
          I
        </button>

        <button
          onClick={() => setColor("purple")}
          className="bg-purple-400 p-4 rounded-xl"
        >
          P
        </button>

        <button
          onClick={() => setColor("silver")}
          className="bg-gray-400 p-4 rounded-xl"
        >
          S
        </button>
      </div>
      </div>
    </div>
  );
}

export default App;

