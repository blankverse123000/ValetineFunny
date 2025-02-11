import Lottie from "lottie-react";
import React, { useState } from "react";
import AnimationData from "../Animation.json";
import bunny from "../bunny.json";

const App = () => {
  const contents = [
    "No",
    "Are you Sure?",
    "Really Sure?",
    "Are you positive ? ",
    "Pookie please...",
    "Just think about it",
    "If you say No, I will be really sad",
    "I will be very sad",
    "I will be very very sad",
  ];

  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  const [positive, setPositive] = useState(false);

  const handleIncrement = () => {
    if (count === 400) {
      setCount(1000);
    } else {
      setCount(count + 50);
    }
    setId(id + 1);
  };
  console.log(count);
  const handlePositive = () => {
    setPositive(true);
  };

  return (
    <div className=" min-h-screen flex flex-col gap-8 justify-center items-center ">
      <h1 className=" text-red-500 text-3xl font-serif font-bold">
        {positive ? "Knew you would say yes!" : "Will you be my Valentine ?"}
      </h1>
      <div className={`${positive ? "hidden" : ""}  flex  gap-4 items-center`}>
        <button
          style={{
            width: count ? count + "px" : "auto",
            height: count ? count + "px" : "auto",
            fontSize: count ? count - (80 + 5 * id) + "px" : "auto",
          }}
          onClick={handlePositive}
          className={` ${
            count === 1000
              ? " fixed z-40 -translate-x-[50%] translate-y-56 "
              : " "
          }bg-green-500  text-white px-4 py-2 rounded-md`}
        >
          Yes
        </button>
        <button
          onClick={handleIncrement}
          className="bg-red-500 text-nowrap  text-white px-4 py-2 rounded-md"
        >
          {contents[id]}
        </button>
      </div>
      <Lottie
        className=" transform -translate-y-8"
        animationData={positive ? bunny : AnimationData}
      />
    </div>
  );
};

export default App;
