
import React, { useState } from 'react';

const SelectionProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div>
      {currentStep === 1 && <div>Resume Screening Form</div>}
      {currentStep === 2 && <div>Skills Assessment Form</div>}
      {currentStep === 3 && <div>Interview Form</div>}
      <button onClick={prevStep} disabled={currentStep === 1}>Previous</button>
      <button onClick={nextStep} disabled={currentStep === 3}>Next</button>
    </div>
  );
};

export default SelectionProcess;
