"use client";
import React, { memo, useCallback, useState } from "react";

export default function CallBackExample() {
  console.log("App Render");
  const [count, setCount] = useState(0);
  const [texy, setText] = useState();

  //Arttırma fonksiyonumuz

  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div className="w-full h-full flex gap-4 justify-center items-center align-middle flex-col">
      <div>{count}</div>
      <Counter increment={increment} />
      <input
        className="border"
        type="Text"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

const Counter = memo(({ increment }) => {
  console.log("Counter Render");

  return (
    <>
      <button onClick={(e) => increment()}>+</button>
    </>
  );
});
