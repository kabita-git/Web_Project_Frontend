import { Mail, Lock } from "lucide-react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-600 to-white-400">
      <div className="bg-grey w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <div className="space-y-4">
          <Input icon={<Mail />} placeholder="Enter your email" />
          <Input icon={<Lock />} type="password" placeholder="Enter your password" />
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-xl">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account? 
           <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
