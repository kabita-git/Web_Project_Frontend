import { LayoutDashboard, BookOpen, Upload, Download, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ role }) {
  const effectiveRole = role || localStorage.getItem("role") || "student";

  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">LMS</h1>

      <ul className="space-y-4">
        {/* Dashboard */}
        <Link to={effectiveRole === "teacher" ? "/teacher-dashboard" : "/student-dashboard"} className="flex items-center gap-3 bg-blue-600 px-4 py-2 rounded-lg cursor-pointer">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        {/* My Courses */}
        <Link to="/my-courses" className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
          <BookOpen size={18} />
          <span>My Courses</span>
        </Link>

        {/* Teacher Only */}
        {effectiveRole === "teacher" && (
          <Link to="/manage-uploads" className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
            <Upload size={18} />
            <span>Manage Uploads</span>
          </Link>
        )}

        {/* Student Only */}
        {effectiveRole === "student" && (
          <Link to="/downloads" className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
            <Download size={18} />
            <span>Download</span>
          </Link>
        )}

        {/* Profile */}
        <Link to="/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
          <User size={18} />
          <span>Profile</span>
        </Link>
      </ul>
    </div>
  );
}
