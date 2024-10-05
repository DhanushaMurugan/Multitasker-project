import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function TaskHomePage() {
  const navigate = useNavigate();

  return (
    <div className="font-playfair grid h-screen mx-20">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center bg-blue-500 p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Task Scheduler</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate("/taskForm")}
              className="flex items-center bg-white text-black font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300"
            >
              <PlusIcon className="h-5 w-5 text-black mr-2" />
              Add Task
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate("/menuPage")}
                className="flex items-center bg-white text-black font-semibold py-2 px-4 rounded hover:bg-blue-100 transition duration-300"
              >
                <ArrowLeftIcon class="h-4 w-4 text-black mr-1" />
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskHomePage;


