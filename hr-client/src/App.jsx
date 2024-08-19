import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeForm from "./components/employee/AddEmployee";
import DepartmentForm from "./components/employee/AddDepartment";
import Enrollment from "./components/training/Enrollment";
import CourseForm from "./components/training/CourseForm";
import AllCourses from "./components/training/Courses";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Sidebar />
                <div className="right-page">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/employees" element={<EmployeeList />} />
                        <Route
                            path="/add-employee"
                            element={<EmployeeForm />}
                        />
                        <Route
                            path="/add-department"
                            element={<DepartmentForm />}
                        />
                        <Route path="/enrollments" element={<Enrollment />} />
                        <Route path="/courses" element={<AllCourses />} />
                        <Route path="/add-course" element={<CourseForm />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
