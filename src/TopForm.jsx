import React, { useState, useRef, useEffect } from "react";
let counter=0

const Hads = () => {

  const [name, setName] = useState("");
  const myInput = useRef();

  const handleSetName = () => {
    setName(myInput.current.value);
  };
  useEffect(()=>{
    myInput.current.focus()
  },[])

  return (
    <div>
      <h4 className="text-3xl font-bold underline">حدس کلمه</h4>

      <input
        type="text"
        ref={myInput} 
        className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
        placeholder="Error input"
      />

      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
        <span className="font-medium">Oh, snap!</span> Some error message.
      </p>

      <button onClick={handleSetName} className="bg-pink-500 p-2 rounded">
        ثبت
      </button>

      <button
        onClick={() => (myInput.current.value = "")}
        className="bg-gray-400 p-2 rounded ml-2"
      >
        مخفی
      </button>

      <br />
      <span>{counter++}</span>
    </div>
  );
};

export default Hads;
