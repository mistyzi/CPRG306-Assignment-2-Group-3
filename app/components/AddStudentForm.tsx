"use client";

import { useState } from "react";
import { Student } from "../data/studentdata";

export default function AddStudentForm({ onAdd }: { onAdd: (s: Student) => void }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        program: "",
        grade: "",
        dateOfBirth: "",
        email: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newStudent: Student = {
            id: crypto.randomUUID(),
            ...form,
        };
        onAdd(newStudent);
        setForm({
            firstName: "",
            lastName: "",
            program: "",
            grade: "",
            dateOfBirth: "",
            email: "",
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 mb-10"
        >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Add New Student
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.keys(form).map((key) => (
                    <input
                        key={key}
                        name={key}
                        value={(form as any)[key]}
                        onChange={handleChange}
                        placeholder={key.replace(/([A-Z])/g, " $1")}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                        required
                    />

                ))}
            </div>

            <button
                type="submit"
                className="mt-6 bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-800"
            >
                Add Student
            </button>
        </form>
    );
}
