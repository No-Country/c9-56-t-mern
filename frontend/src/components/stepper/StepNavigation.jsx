import React from 'react';
import Step from "./Step";


const StepNavigation = (props) => {
    
    return (
        <div className="stepWrapper">
        {props.labelArray.map((item, index) =>
        
         <Step
         key={index} 
         index={index} 
         label={item} 
         updateStep={props.updateStep} 
         selected={props.currentStep === index + 1}>
            
         </Step>) }
    </div>
    );
};

export default StepNavigation;
