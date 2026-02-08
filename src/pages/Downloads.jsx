import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function Downloads() {
  const role = localStorage.getItem("role") || "student";
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("uploads") || "[]");
    setUploads(stored);
  }, []);

  const download = (name) => {
    const content = `Sample content for ${name}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Downloads</h1>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Learning Materials</h2>

          {[
            "Web Engineering - Unit 1.pdf",
            "Software Engineering - UML.pptx",
            "Database Notes.docx",
            "React Intro Video.mp4",
          ].map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b py-3"
            >
              <span>{file}</span>
              <button className="bg-green-600 text-white px-4 py-1 rounded">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

