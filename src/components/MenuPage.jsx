import React from "react";
import task from "../image/task-img.png";
import invoice from "../image/Invoice-img.png";
import qrimg from "../image/qr-img.png";
import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
function MenuPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12 mt-3">
            <h1 className="text-5xl font-playfair font-serif text-gray-800 bg-white p-4 rounded-lg backdrop-blur-sm">
              Menu
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white backdrop-blur-sm rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-playfair text-gray-700 mb-4">
                QR Generator
              </h2>
              <img
                src={qrimg}
                alt="QR Generator"
                className="w-2/3 mx-auto mb-6"
              />
              <button
                onClick={() => navigate("/qrGenerator")}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-lg font-semibold"
              >
                Open
              </button>
            </div>

            <div className="p-8 bg-white backdrop-blur-sm rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-playfair text-gray-700 mb-4">
                Invoice Generator
              </h2>
              <img
                src={invoice}
                alt="Invoice Generator"
                className="w-2/3 mx-auto mb-6"
              />
              <button
                onClick={() => navigate("/invoiceGenerator")}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-lg font-semibold"
              >
                Open
              </button>
            </div>
            <div className="p-8 bg-white backdrop-blur-sm rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-playfair text-gray-700 mb-4">
                Task Scheduler
              </h2>
              <img
                src={task}
                alt="Task Scheduler"
                className="w-2/3 mx-auto mb-6"
              />
              <button
                onClick={() => navigate("/taskHomePage")}
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-xl font-semibold"
              >
                Open
              </button>
            </div>
          </div>
          <div className="flex item-center justify-end w-full font-playfair font-serif text-gray-800 bg-white p-2 mt-8 mb-5 rounded-lg backdrop-blur-sm">
            <button
              onClick={() => navigate("/")}
              className="flex items-center bg-gray text-black font-semibold py-2 px-2 rounded hover:bg-gray-200 transition duration-300 border"
            >
              <ArrowUturnLeftIcon class="h-4 w-4 text-black mr-1" />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;

