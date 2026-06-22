"use client";

import { useState } from "react";
import { students } from "./data/studentdata";
import StudentCard from "./components/StudentCard";
export default function Home() {
  const [selectedId, setSelectedID] = useState<string | null>(null);
  const studentList = students as any[];

  const handleSelect = (studentId: string) => {
    setSelectedID((prev) => (prev === studentId ? null : studentId));
  };

  const selectedStudent = studentList.find(
    (student) => student.id === selectedId
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <h1 className="text-xl font-bold text-slate-900">SAIT</h1>
          <p className="text-slate-400 text-sm mt-0.5">Student Information page</p>
        </div>
      </header>
       <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Enrolled Students</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Click any Card to select a student. Props flow down; then the callback
          follow up
        </p>
      </div>

      {/* Banner Conditional Rendering  */}
      {selectedStudent && (
        <div className="mb-6 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-5 py-3">
          <p className="text-sm font-medium text-blue-800">
            Selected: <span className="font-bold">{selectedStudent.name}</span>{" "}
            . {selectedStudent.program}
          </p>
          <button
            type="button"
            onClick={() => setSelectedID(null)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          students.map((student)=>(
            <div key={student.id} className="cursor-pointer" onClick={() => handleSelect(student.id)}>
              <StudentCard 
                firstName={student.firstName}
                lastName={student.lastName}
                program={student.program}
                grade={student.grade}
                highlight={student.id === selectedId}
                dateOfBirth={student.dateOfBirth}
                email={student.email}
              />
            </div>
          ))
        }

      </div>

     
        
    
    </div>
  );
}