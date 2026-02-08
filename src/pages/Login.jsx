import { Mail, Lock } from "lucide-react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter email & password");
      return;
    }

    // store role for demo (frontend only)
    localStorage.setItem("role", role);
    // store logged-in email for demo/profile display
    localStorage.setItem("loggedInEmail", email);

    // redirect based on role
    if (role === "student") navigate("/student-dashboard");
    else navigate("/teacher-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        {/* Add spacing between fields */}
        <div className="space-y-4">
          <Input
            icon={<Mail />}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            icon={<Lock />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded-xl"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-xl"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
