import React, { useEffect, useState } from "react";
import { Upload, Trash2 } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function ManageUploads() {
  const role = localStorage.getItem("role") || "teacher";
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("uploads") || "[]");
    setUploads(stored);
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const next = [{ name: file.name, time: new Date().toISOString() }, ...uploads];
    setUploads(next);
    localStorage.setItem("uploads", JSON.stringify(next));
    e.target.value = null;
  };

  const remove = (index) => {
    const next = uploads.filter((_, i) => i !== index);
    setUploads(next);
    localStorage.setItem("uploads", JSON.stringify(next));
  };

  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Uploads</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <label className="inline-flex items-center gap-2 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded">
          <Upload size={16} />
          <span>Choose file</span>
          <input type="file" onChange={handleUpload} className="hidden" />
        </label>

        <div className="mt-4">
          <h3 className="font-medium mb-2">Uploaded Files</h3>
          <ul className="divide-y">
            {uploads.length === 0 && <li className="py-3 text-gray-600">No uploaded files.</li>}
            {uploads.map((u, i) => (
              <li key={i} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-sm">{u.name.charAt(0).toUpperCase()}</div>
                  <div>
                    <div className="font-medium">{u.name}</div>
                    <div className="text-xs text-gray-500">{new Date(u.time).toLocaleString()}</div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white rounded" onClick={() => remove(i)}>
                  <Trash2 size={14} /> Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
