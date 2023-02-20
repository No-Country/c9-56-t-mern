import React from "react"

const Step = (selected, updateStep, index) => {
  return (
    <div className={"stepBlock" + (selected ? " selected" : "")}>
      <div
        className="circleWrapper"
        onClick={() => updateStep(index + 1)}
      >
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default Step
