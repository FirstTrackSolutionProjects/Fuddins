import React, { useState } from "react";
import PlanTable from "./PlanTable";
import ExeRegister from "./ExeRegister";

const TimelineProcess = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    { title: "Choose Plan", content: <PlanTable/> },
    { title: "Registration", content: "Fill out the registration form." },
    { title: "Confirmation", content: "Confirm your registration." },
    { title: "Thank You", content: "Thank you for registering!" },
  ];

  const nextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const previousStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  const retryRegistration = () => {
    setCurrentStage(1);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-4 font-poppins">
      {/* Timeline */}
      <div className="relative">
        <div className="flex justify-between items-center mb-4">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`relative text-center w-20 md:w-1/4 transition-all duration-500 ${
                index <= currentStage ? "text-black text-[10px] md:text-base font-bold -mt-6  " : "text-gray-400 -mt-6 text-[10px] md:text-base"
              }`}
            >
              {stage.title}
              {index < stages.length - 1 && (
                <div
                  className={`absolute w-full md:mt-3 h-1 bg-lime-500 top-5 transform transition-all duration-500 ${
                    index < currentStage ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                ></div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute h-1 w-full bg-gray-300 top-5"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{stages[currentStage].title}</h2>
        <p className="mb-6">{stages[currentStage].content}</p>

        {currentStage === 0 && (
          <div>
            <button
              onClick={nextStage}
              className="bg-lime-600 text-sm md:text-base text-white px-4 py-2 rounded "
            >
              Proceed to Registration
            </button>
          </div>
        )}

        {currentStage === 1 && (
          <div>
            {/* Registration Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const isError = Math.random() > 0.8; // Simulate a registration error 20% of the time
                if (isError) {
                  alert("There was an issue with registration. Please try again.");
                  retryRegistration();
                } else {
                  nextStage();
                }
              }}
              className="space-y-4"
            >
              <ExeRegister/>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={previousStage}
                  className="bg-gray-500 text-sm md:text-base text-white md:px-4 px-2 md:py-2 py-1 rounded hover:bg-gray-600"
                >
                  Back to Plan Selection
                </button>
                <button
                  type="submit"
                  className="bg-lime-500 text-sm md:text-base text-white md:px-4 px-2 md:py-2 py-1 rounded "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        )}

        {currentStage === 2 && (
          <div>
            <button
              onClick={nextStage}
              className="bg-lime-500 text-sm md:text-base text-white px-4 py-2 rounded "
            >
              Confirm Registration
            </button>
          </div>
        )}

        {currentStage === 3 && (
          <div>
            <p className="text-lime-500 font-bold text-lg">
              {stages[currentStage].content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineProcess;
