

import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(128);
  const [color, setColor] = useState("#000000");
  const canvasRef = useRef(null);
  const navigate=useNavigate()


  const generateQRCode = () => {
    if (canvasRef.current && text) {
      QRCode.toCanvas(
        canvasRef.current,
        text,
        {
          width: size,
          color: {
            dark: color,
            light: "#FFFFFF", // background color
          },
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  };

  const downloadQRCode = () => {
    if (canvasRef.current) {
      const link = document.createElement("a");
      link.href = canvasRef.current.toDataURL();
      link.download = "qr-code.png";
      link.click();
    }
  };

  const shareQRCode = () => {
    if (canvasRef.current && navigator.share) {
      canvasRef.current.toBlob((blob) => {
        const file = new File([blob], "qr-code.png", { type: "image/png" });
        const shareData = {
          title: "QR Code",
          text: "Check out this QR code!",
          files: [file],
        };
        navigator.share(shareData).catch((error) => {
          console.error("Error sharing", error);
        });
      });
    }
  };

  return (
    <div className="font-playfair min-h-screen flex flex-col items-center bg-gray-50 py-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg ">
        <div className="flex justify-between shadow-md">
          <div className="  flex items-center pl-6 pt-2 pb-2">
            <div>
              <QrCodeIcon class="h-8 w-8 text-black" />
            </div>
            <div>
              <h2 className=" text-2xl text-black ml-1">QR Generator</h2>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate("/menuPage")}
              className="flex items-center bg-gray text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300 border"
            >
              <ArrowUturnLeftIcon class="h-4 w-4 text-black mr-1" />
              Back
            </button>
          </div>
        </div>

        <div className="pb-8 pr-8 pl-8 mt-8">
          <div className="mb-4 ">
            <label className="text-left block text-lg font-semibold mb-2 text-gray-700">
              Enter Data:
            </label>
            <input
              type="text"
              placeholder="Enter text or URL"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="text-left block text-lg font-semibold mb-2 text-gray-700">
              QR Code Size:
            </label>
            <input
              type="range"
              min="64"
              max="256"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-gray-700 mt-1">{size}px</div>
          </div>
          <div className="mb-6">
            <label className="block text-left text-lg font-semibold mb-2 text-gray-700">
              QR Code Color:
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-0 border-none rounded-lg "
            />
          </div>
          <div className="mb-6">
            <button
              onClick={generateQRCode}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Generate QR Code
            </button>
          </div>

          {text && (
            <>
              <div className="mb-6 flex justify-center">
                <canvas
                  ref={canvasRef}
                  className="border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <button
                  onClick={downloadQRCode}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                  Save
                </button>
                <button
                  onClick={shareQRCode}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                  Share
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;

