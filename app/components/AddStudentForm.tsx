/**
 * Student Name: Misty, Zabdiel, Jonah
 * Date: June 25, 2026
 * Program Description: This component provides a form for adding new students to the 
 * portal. Using the inputs, it processes the data into a student object with the 
 * specific ID upon submission, and outputs the new data to the application's student 
 * list.
 */

"use client";

import { useState } from "react";
import React from "react";
import { Student } from "../data/studentdata";

// This component shows the form to add a new student
export default function AddStudentForm({ onAdd }: { onAdd: (s: Student) => void }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        program: "",
        grade: "",
        dateOfBirth: "",
        email: "",
    });

    // Runs when the user types in the text boxes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // This function runs when the user clicks the add student button to submit the information.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Creates a new student object with its specific ID and info from the form
        const newStudent: Student = {
            id: crypto.randomUUID(),
            ...form,
        };
        onAdd(newStudent); // Sends the new students info to the main list
        setForm({
            firstName: "",
            lastName: "",
            program: "",
            grade: "",
            dateOfBirth: "",
            email: "",
        });
    };

    // To handle the visuals of the form that the user sees.
    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 mb-10"
        >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Add New Student
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(Object.keys(form) as (keyof typeof form)[]).map((key) => (
                    <input
                        key={key}
                        name={key}
                        value={form[key]}
                        onChange={handleChange}
                        placeholder={key.replace(/([A-Z])/g, " $1")}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                        required
                    />

                ))}
            </div>

            {/* Buttons Container */}
            <div className="flex gap-3">
                <button
                    type="submit"
                    className="mt-6 bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                    Add Student
                </button>
                
                <button
                    type="button"
                    onClick={() => setForm({ firstName: "", lastName: "", program: "", grade: "", dateOfBirth: "", email: "" })}
                    className="mt-6 bg-gray-100 text-gray-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                    Clear Form
                </button>
            </div>
        </form>
    );
}
