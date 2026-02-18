import { LayoutDashboard, BookOpen, Upload, Download, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ role }) {
  const effectiveRole = role || localStorage.getItem("role") || "student";

  return (
    <div className="w-64 min-h-screen bg-slate-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">Study Zone</h1>

      <ul className="space-y-4">
        {/* Dashboard */}
        <NavLink
          to={effectiveRole === "teacher" ? "/teacher-dashboard" : "/student-dashboard"}
          className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-slate-600' : 'hover:bg-slate-600'}`}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        {/* My Courses */}
        <NavLink to="/my-courses" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-slate-600' : 'hover:bg-slate-600'}`}>
          <BookOpen size={18} />
          <span>My Courses</span>
        </NavLink>

        {/* Teacher Only */}
        {effectiveRole === "teacher" && (
          <NavLink to="/manage-uploads" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-slate-600' : 'hover:bg-slate-600'}`}>
            <Upload size={18} />
            <span>Manage Uploads</span>
          </NavLink>
        )}

        {/* Student Only */}
        {effectiveRole === "student" && (
          <NavLink to="/downloads" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-slate-600' : 'hover:bg-slate-600'}`}>
            <Download size={18} />
            <span>Download</span>
          </NavLink>
        )}

        {/* Profile */}
        <NavLink to="/profile" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer ${isActive ? 'bg-slate-600' : 'hover:bg-slate-600'}`}>
          <User size={18} />
          <span>Profile</span>
        </NavLink>
      </ul>
    </div>
  );
}
