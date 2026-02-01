import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import HomePage from "./pages/HomePage.jsx";  
export default function App(){
  return(
    <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/teacher-dashboard" element={<TeacherDashboard/>}/>
    <Route path="/student-dashboard" element={<StudentDashboard/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/" element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
  );
  
}

