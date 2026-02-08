import { Mail, Lock, User, Users } from "lucide-react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // must select a role

  const handleSignup = (e) => {
    e.preventDefault();

    // validation
    if (!name || !email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    // store role temporarily (frontend-only)
    const roleValue = role.toLowerCase();
    localStorage.setItem("role", roleValue);

    // store profile (name + email + role) so Profile page shows correct name
    localStorage.setItem(
      "profile",
      JSON.stringify({ name: name.trim(), email: email.trim(), role: roleValue })
    );

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        onSubmit={handleSignup}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        <div className="space-y-4">
          {/* Name */}
          <Input
            icon={<User />}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <Input
            icon={<Mail />}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <Input
            icon={<Lock />}
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Role selection */}
          <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
            <Users className="text-gray-400" />
            <select
              className="w-full outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select role</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-xl"
        >
          Sign Up
        </button>

        {/* Link to login */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
}
