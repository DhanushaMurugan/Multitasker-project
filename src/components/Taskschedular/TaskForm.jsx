import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Select priority");
  const [completed, setCompleted] = useState(false);
  const [tasks, setTasks] = useState([]);
  const navigate =useNavigate()

  
  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      taskName,
      description,
      dueDate,
      priority,
      completed,
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  
  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskName(taskToEdit.taskName);
    setDescription(taskToEdit.description);
    setDueDate(taskToEdit.dueDate);
    setPriority(taskToEdit.priority);
    setCompleted(taskToEdit.completed);
    handleDelete(id);
  };

  
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  
  const handleDownloadPdf = (task) => {
    const doc = new jsPDF();
    doc.text(`Task Name: ${task.taskName}`, 10, 10);
    doc.text(`Description: ${task.description}`, 10, 20);
    doc.text(`Due Date: ${task.dueDate}`, 10, 30);
    doc.text(`Priority: ${task.priority}`, 10, 40);
    doc.text(`Completed: ${task.completed ? "Yes" : "No"}`, 10, 50);
    doc.save(`${task.taskName}.pdf`);
  };

  
  const resetForm = () => {
    setTaskName("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
    setCompleted(false);
  };

  return (
    <div className="font-playfair min-h-screen flex flex-col items-center bg-gray-50 py-8">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Add Task
        </h2>
        <form className="bg-white shadow-md rounded-lg px-8 py-6 space-y-5">
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Select priority">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="w-5 h-5"
            />
            <span className="text-lg">Completed</span>
          </label>
          <div className="flex items-center space-x-2 justify-center">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate("/taskHomePage")}
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition duration-300"
              >
                <ArrowLeftIcon class="h-5 w-5 text-white mr-1" />
                Back
              </button>
            </div>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition duration-300"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Task List</h2>
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {task.taskName}
              </h3>
              <p className="text-lg mb-2">Description: {task.description}</p>
              <p className="text-lg mb-2">Due Date: {task.dueDate}</p>
              <p className="text-lg mb-2">Priority: {task.priority}</p>
              <p className="text-lg mb-5">
                Completed: {task.completed ? "Yes" : "No"}
              </p>
              <div className="flex justify-center flex-row space-x-2 lg:flex-col lg:space-y-2 lg:space-x-0 lg:mt-4">
                <button
                  onClick={() => handleEdit(task.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleDownloadPdf(task)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Download PDF
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskForm;


