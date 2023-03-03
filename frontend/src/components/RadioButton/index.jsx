import React, { useState } from "react"

const RadioButton = ({ title, desc }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label 
        htmlFor={title} 
        className={`bg-neutral-50 w-40 py-3 flex flex-col items-center border-2 border-neutral-200 
          ${isChecked ? 'border-violet-700  text-neutral-900 ' : 'text-neutral-400 '} 
          rounded-lg mx-1 my-1`}
      >
        <h2 className="font-body text-body-bold">{title}</h2>
        <p className="font-caption text-caption">{desc}</p>
      </label>
      <input
        type="radio"
        id={title}
        name="name"
        className="hidden"
        onClick={handleClick}
      />
    </>
  );
};

export default RadioButton;
