import "./App.css";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/Home";
import MyCourses from './views/Student/MyCourses';
import StudentModule from './views/Student/Module';
import StudentGrade from './views/Student/Grade';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/studentCourses" element={<MyCourses />} />
            <Route path="/studentModule" element={<StudentModule />} />
            <Route path="/studentGrade" element={<StudentGrade />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
