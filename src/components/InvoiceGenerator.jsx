import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

const InvoiceGenerator = () => {
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [items, setItems] = useState([{ description: "", quantity: 0,amount: 0 }]);
  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceDate: new Date(),
    dueDate: new Date(),
  });
  const [total, setTotal] = useState({
    amount: 0,
    taxes :0,
    payable: 0
  });
  const navigate = useNavigate()

  const handleClientChange = (e) => {
    setClientInfo({
      ...clientInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleItemChange = (index, e) => {
    const newItems = [...items];
    newItems[index][e.target.name] = e.target.value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { description: "", quantity: 0,amount:0 }]);
  };

  const calculateTotal = () => {
    const itemTotal = items.reduce(
      (sum, item) => sum + (parseFloat(item.quantity) || 0)*(parseFloat(item.amount)|| 0),0
      
    );
    const taxes = itemTotal * 0.1;
    setTotal({
      amount: itemTotal,
      taxes: taxes,
      payable: itemTotal + taxes,
    });
  };

  const handleGenerateInvoice = () => {
    calculateTotal();
  };

  return (
    <div className="font-playfair max-w-4xl mx-auto  bg-gray-50">
      <div className="flex justify-between shadow-md">
        <div className="  flex items-center pt-2 pb-2">
          
          <div>
            <h3 className="text-2xl font-bold text-center text-black ml-1">
              Invoice Generator
            </h3>
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

      <div className="p-6">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="text-xl font-semibold mb-4">Client Information</h4>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Client Name"
              name="name"
              value={clientInfo.name}
              onChange={handleClientChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Client Email"
              name="email"
              value={clientInfo.email}
              onChange={handleClientChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              type="text"
              placeholder="Client Address"
              name="address"
              value={clientInfo.address}
              onChange={handleClientChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="text-xl font-semibold mb-4">Items Purchased</h4>
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 mb-4">
              <label>Item Description: </label>
              <input
                type="text"
                placeholder="Enter Item Description"
                name="description"
                value={item.description}
                onChange={(e) => handleItemChange(index, e)}
                className="p-2 border border-gray-300 rounded"
              />
              <br></br>
              <label>Quantity: </label>
              <input
                type="number"
                placeholder="Enter Quantity"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                className="p-2 border border-gray-300 rounded"
              />
              <br></br>
              <label>Amount: </label>
              <input
                type="number"
                placeholder="Enter Amount"
                name="amount"
                value={item.amount}
                onChange={(e) => handleItemChange(index, e)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            Add Item
          </button>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="text-xl font-semibold mb-4">Additional Details</h4>
          <div className="grid grid-cols-2 gap-4 place-content-around ">
            <div class="flex items-center">
              <label className="block mb-1 pr-2">Invoice Date: </label>
              <DatePicker
                selected={invoiceDetails.invoiceDate}
                onChange={(date) =>
                  setInvoiceDetails({ ...invoiceDetails, invoiceDate: date })
                }
                placeholderText="Enter Invoice Date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div class="flex items-center">
              <label className="block mb-1 pr-2">Due Date: </label>
              <DatePicker
                selected={invoiceDetails.dueDate}
                onChange={(date) =>
                  setInvoiceDetails({ ...invoiceDetails, dueDate: date })
                }
                placeholderText="Enter Due Date"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h4 className="text-2xl font-semibold mb-4">Summary</h4>
          <div className="space-y-2">
            <div>Total Amount: {total.amount.toFixed(2) || 0}</div>
            <div>Taxes (10%): {total.taxes.toFixed(2) || 0}</div>
            <div>Total Payable: {total.payable.toFixed(2) || 0}</div>
          </div>
        </section>

        <button
          onClick={handleGenerateInvoice}
          className="text-xl w-full bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Generate Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
