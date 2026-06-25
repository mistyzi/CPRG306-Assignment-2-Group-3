/**
 * Student Name: Misty, Zabdiel, Jonah
 * Date: June 25, 2026
 * Program Description: This is the page component for the student portal. 
 * It manages the application state, handles student selection and addition, 
 * and handles the rendering of the AddStudentForm, StudentCard list, 
 * and the Footer.
 */

"use client";

import { useState } from "react";
import { students as initialStudents, Student } from "./data/studentdata";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedId, setSelectedID] = useState<string | null>(null);
  const [studentList, setStudentList] = useState<Student[]>(initialStudents);

  // Updates the ID to highlight the selected card, clear it if clicked again.
  const handleSelect = (studentId: string) => {
    setSelectedID((prev) => (prev === studentId ? null : studentId));
  };

  // Adds a new student to the local list, which causes the UI to render again.
  const addStudent = (newStudent: Student) => {
    setStudentList((prev) => [...prev, newStudent]);
  };

  const selectedStudent = studentList.find((s) => s.id === selectedId);

  return (
    <div className="flex flex-col">
      {/* Page Title */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
            {studentList.length}
          </span>
        </div>
        <p className="text-gray-500 mt-1">
          Manage student information and enrollment.
        </p>
      </div>

      {/* Add Student Form */}
      <AddStudentForm onAdd={addStudent} />

      {/* Selected Banner */}
      {selectedStudent && (
        <div className="mt-6 mb-6 bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 flex justify-between items-center">
          <p className="text-sm text-blue-800">
            Selected:{" "}
            <span className="font-semibold">
              {selectedStudent.firstName} {selectedStudent.lastName}
            </span>{" "}
            — {selectedStudent.program}
          </p>
          <button
            onClick={() => setSelectedID(null)}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      {/* Student Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {studentList.map((student) => (
          <div key={student.id} onClick={() => handleSelect(student.id)}>
            <StudentCard student={student} highlight={student.id === selectedId} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

