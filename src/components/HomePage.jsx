import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registerPage");
  };

  return (
    <div class="h-screen bg-blue-500">
      <div class="flex items-center justify-center h-screen">
        <div class="font-playfair bg-white  p-20 rounded-lg shadow-xl text-center">
          <h1 class="text-5xl mb-8">MultiTasker</h1>
          <p class="text-gray-700 text-3xl">
            Optimize Your Workflow,<br></br>Simplify Your Life
          </p>
          <div>
            <ChevronDoubleRightIcon
              class="h-20 w-20 text-gray-600 mx-auto mt-12 cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
    
  
}

export default HomePage;

