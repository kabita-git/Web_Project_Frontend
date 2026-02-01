import { LayoutDashboard, BookOpen, Upload, Download, User } from "lucide-react";

export default function Sidebar({ role }) {
  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">LMS</h1>

      <ul className="space-y-4">
        {/* Dashboard */}
        <li className="flex items-center gap-3 bg-blue-600 px-4 py-2 rounded-lg cursor-pointer">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </li>

        {/* My Courses */}
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
          <BookOpen size={18} />
          <span>My Courses</span>
        </li>

        {/* Teacher Only */}
        {role === "teacher" && (
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
            <Upload size={18} />
            <span>Manage Uploads</span>
          </li>
        )}

        {/* Student Only */}
        {role === "student" && (
          <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
            <Download size={18} />
            <span>Download</span>
          </li>
        )}

        {/* Profile */}
        <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-600 rounded-lg cursor-pointer">
          <User size={18} />
          <span>Profile</span>
        </li>
      </ul>
    </div>
  );
}
