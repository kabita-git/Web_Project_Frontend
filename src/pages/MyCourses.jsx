import React, { useEffect, useState } from "react";
import { BookOpen, PlusCircle, Check, Plus } from "lucide-react";
import Sidebar from "../components/Sidebar";

const DEFAULT_COURSES = [
  { id: 1, title: "Intro to React", desc: "Build interactive UIs with React." },
  { id: 2, title: "Advanced JavaScript", desc: "Deep dive into JS quirks and patterns." },
  { id: 3, title: "Data Structures", desc: "Learn arrays, trees, graphs and more." },
];

export default function MyCourses() {
  const role = localStorage.getItem("role") || "student";

  // student state
  const [enrolled, setEnrolled] = useState([]);

  // teacher state: own courses
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", desc: "" });

  useEffect(() => {
    const storedEnrolled = JSON.parse(localStorage.getItem("enrolledCourses") || "[]");
    setEnrolled(storedEnrolled);

    const storedTeacher = JSON.parse(localStorage.getItem("teacherCourses") || "[]");
    // if teacher has no created courses, populate with defaults
    if (storedTeacher.length === 0) {
      localStorage.setItem("teacherCourses", JSON.stringify(DEFAULT_COURSES));
      setCourses(DEFAULT_COURSES);
    } else setCourses(storedTeacher);
  }, []);

  const enroll = (courseId) => {
    if (enrolled.includes(courseId)) return;
    const next = [...enrolled, courseId];
    setEnrolled(next);
    localStorage.setItem("enrolledCourses", JSON.stringify(next));
  };

  // teacher actions
  const addCourse = () => {
    if (!newCourse.title.trim()) return alert("Enter a course title");
    const id = Date.now();
    const c = { id, title: newCourse.title.trim(), desc: newCourse.desc.trim() };
    const next = [c, ...courses];
    setCourses(next);
    localStorage.setItem("teacherCourses", JSON.stringify(next));
    setNewCourse({ title: "", desc: "" });
  };

  const removeCourse = (id) => {
    const next = courses.filter((c) => c.id !== id);
    setCourses(next);
    localStorage.setItem("teacherCourses", JSON.stringify(next));
  };

  if (role === "teacher") {
    return (
      <div className="flex">
        <Sidebar role={role} />
        <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">My Courses </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="font-semibold mb-3">Create Course</h2>
              <input
                className="w-full p-2 border rounded mb-3"
                placeholder="Course title"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
              />
              <textarea
                className="w-full p-2 border rounded mb-3"
                placeholder="Short description"
                value={newCourse.desc}
                onChange={(e) => setNewCourse({ ...newCourse, desc: e.target.value })}
              />
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded" onClick={addCourse}>
                  <Plus size={14}/> Create Course
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium mb-2">Stats</h3>
              <div className="text-sm text-gray-600">Total courses: {courses.length}</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-3">Your Courses</h2>
          {courses.length === 0 ? (
            <p className="text-gray-600">You have not created any courses yet.</p>
          ) : (
            <ul className="space-y-3">
              {courses.map((c) => (
                <li key={c.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-xs text-gray-500">{c.desc}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-600 text-white rounded flex items-center gap-2" onClick={() => alert('Open course editor (placeholder)')}>
                      <Check size={14}/> Edit
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded flex items-center gap-2" onClick={() => removeCourse(c.id)}>
                      <PlusCircle size={14}/> Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>
      </div>
    );
  }

  // student view
  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DEFAULT_COURSES.map((c) => {
          const isEnrolled = enrolled.includes(c.id);
          return (
            <div key={c.id} className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-blue-50 text-blue-600"><BookOpen size={18} /></div>
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-xs text-gray-500">{c.desc}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">{isEnrolled ? "Enrolled" : ""}</div>
                <button
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded ${isEnrolled ? "bg-green-600 text-white" : "bg-blue-600 text-white"}`}
                  onClick={() => enroll(c.id)}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? <><Check size={14}/> Enrolled</> : <><PlusCircle size={14}/> Enroll</>}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-3">Enrolled Courses</h2>
        {enrolled.length === 0 ? (
          <p className="text-gray-600">You have not enrolled in any courses yet.</p>
        ) : (
          <ul className="space-y-2">
            {enrolled.map((id) => {
              const c = DEFAULT_COURSES.find((x) => x.id === id);
              return (
                <li key={id} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <div>{c ? c.title : `Course ${id}`}</div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      </div>
    </div>
  );
}
