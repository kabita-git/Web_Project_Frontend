import React, { useEffect, useState } from "react";
import { User, Edit2, Check, X } from "lucide-react";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  const role = localStorage.getItem("role") || "student";
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({ name: "", email: "", role: localStorage.getItem("role") || "student" });
  const [displayName, setDisplayName] = useState("");
  const [displayRole, setDisplayRole] = useState(localStorage.getItem("role") || "student");

  useEffect(() => {
    const stored = localStorage.getItem("profile");
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    if (stored) {
      const parsed = JSON.parse(stored);
      setProfile((p) => ({ ...p, ...parsed }));
      // determine display name: prefer profile.name when email matches logged-in email
      if (parsed.name) setDisplayName(parsed.name);
      if (parsed.email && loggedInEmail && parsed.email === loggedInEmail) {
        if (parsed.name) setDisplayName(parsed.name);
      }
    }

    // if no displayName yet, derive from loggedInEmail
    if (!displayName && loggedInEmail) {
      const localPart = loggedInEmail.split("@")[0];
      setDisplayName(localPart.replace(/[._]/g, " "));
    }

    // show current role from session (login) if present
    const sessionRole = localStorage.getItem("role");
    if (sessionRole) setDisplayRole(sessionRole);
  }, []);

  const save = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditing(false);
    alert("Profile saved");
  };

  const initials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      {/* show the email used to log in (demo) */}
      <div className="mb-4 text-sm text-gray-600">Signed in as: {localStorage.getItem("loggedInEmail") || profile.email || "—"}</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 flex flex-col items-center bg-white p-6 rounded-lg shadow">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700 mb-4">
            {initials(displayName)}
          </div>
          <div className="text-center text-sm text-gray-600">{displayRole}</div>
        </div>

        <div className="col-span-2 bg-white p-6 rounded-lg shadow">
          {!editing ? (
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">Name</div>
                <div className="text-lg font-medium">{profile.name || displayName || "—"}</div>
              </div>

              <div>
                <div className="text-xs text-gray-500">Email</div>
                <div className="text-lg font-medium">{profile.email || localStorage.getItem("loggedInEmail") || "—"}</div>
              </div>

              <div className="mt-6">
                <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={() => setEditing(true)}>
                  <span className="inline-flex items-center gap-2"><Check size={14}/> Edit</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input
                  className="w-full p-2 border rounded"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  className="w-full p-2 border rounded"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded inline-flex items-center gap-2" onClick={save}>
                  <Check size={14}/> Save
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded inline-flex items-center gap-2" onClick={() => setEditing(false)}>
                  <X size={14}/> Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
