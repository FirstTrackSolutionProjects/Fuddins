import React, { useState } from 'react';
import PlanTable from './PlanTable';

const TimelineProcess2=()=> {
  const [currentStage, setCurrentStage] = useState(0); // Stage management
  const [selectedPlan, setSelectedPlan] = useState(''); // Plan management

  const stages = ['Choose Plan', 'Registration', 'Confirmation', 'Thank You'];

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setCurrentStage(1); // Move to Registration stage
  };

  const handleRegistration = () => {
    setCurrentStage(2); // Move to Confirmation stage
  };

  const handleConfirmation = () => {
    setCurrentStage(3); // Move to Thank You stage
  };

  const handleBackToPlan = () => {
    setCurrentStage(0); // Go back to Choose Plan stage
  };

  return (
    <div className="container mx-auto p-4">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-4">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`relative text-center w-1/4 transition-all duration-500 ${
                index <= currentStage ? "text-black font-bold -mt-6" : "text-gray-400 -mt-6"
              }`}
            >
              {stage}
              {index < stages.length + 1 && (
                <div
                  className={`absolute w-full mt-3 h-1 bg-lime-500 top-5 transform transition-all duration-500 ${
                    index < currentStage ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                ></div>
              )}
            </div>
          ))}
        </div>

      {/* Content based on current stage */}
      {currentStage === 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Choose Your Plan</h2>
          <PlanTable/>
        </div>
      )}

      {currentStage === 1 && (
        <div>
          <h2 className="text-2xl font-bold">Registration</h2>
          <p>You've selected: <strong>{selectedPlan}</strong></p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="input"/>
            <input type="email" placeholder="Your Email" className="input"/>
            <button type="button" className="btn" onClick={handleRegistration}>
              Register
            </button>
          </form>
          <button className="mt-4 text-blue-500" onClick={handleBackToPlan}>
            Back to Plan Selection
          </button>
        </div>
      )}

      {currentStage === 2 && (
        <div>
          <h2 className="text-2xl font-bold">Confirmation</h2>
          <p>Please confirm your details and plan: <strong>{selectedPlan}</strong></p>
          <button className="btn" onClick={handleConfirmation}>
            Confirm
          </button>
          <button className="mt-4 text-blue-500" onClick={handleBackToPlan}>
            Back to Plan Selection
          </button>
        </div>
      )}

      {currentStage === 3 && (
        <div>
          <h2 className="text-2xl font-bold">Thank You</h2>
          <p>Thank you for registering with the <strong>{selectedPlan}</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default TimelineProcess2;
