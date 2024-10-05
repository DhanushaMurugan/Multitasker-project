import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import TaskHomePage from './components/Taskschedular/TaskHomePage';
import TaskForm from './components/Taskschedular/TaskForm';
import QRCodeGenerator from './components/QRCodeGenerator';
import InvoiceGenerator from './components/InvoiceGenerator';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/menuPage" element={<MenuPage />} />
          <Route path="/taskHomePage" element={<TaskHomePage />} />
          <Route path="/taskForm" element={<TaskForm />} />
          <Route path="/qrGenerator" element={<QRCodeGenerator />} />
          <Route path="/invoiceGenerator" element={<InvoiceGenerator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
