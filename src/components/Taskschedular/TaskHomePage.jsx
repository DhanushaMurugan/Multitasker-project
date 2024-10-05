import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function TaskHomePage() {
  const navigate = useNavigate();

  return (
    <div className="font-playfair grid h-screen px-4 sm:px-10 md:px-20">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <div className="flex flex-col md:flex-row justify-between items-center bg-blue-500 p-4 rounded-lg shadow-md">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Task Scheduler
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <button
              onClick={() => navigate("/taskForm")}
              className="flex items-center bg-white text-black font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300"
            >
              <PlusIcon className="h-5 w-5 text-black mr-2" />
              Add Task
            </button>
            <button
              onClick={() => navigate("/menuPage")}
              className="flex items-center bg-white text-black font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300"
            >
              <ArrowLeftIcon className="h-4 w-4 text-black mr-1" />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskHomePage;

