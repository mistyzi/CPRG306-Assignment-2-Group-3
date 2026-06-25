/**
 * Student Name: Misty, Zabdiel, Jonah
 * Date: June 25, 2026
 * This component displays an student's information in a card format.
 * It shows details like name, program, grade, and email, and changes the 
 * border color if the card is selected.
 */

export default function StudentCard({ student, highlight }: any) {
  return (
    <div
    // Applies a blue border when the card is selected, hover on the card when user hovers mouse.
      className={`relative p-5 rounded-xl bg-white shadow-sm border transition-all cursor-pointer hover:scale-[1.02] hover:shadow-md ${
        highlight ? "border-blue-500 shadow-md" : "border-gray-200"
      }`}
    >
      {highlight && (
        <div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full p-0.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      )}

      <h3 className="text-lg font-semibold text-gray-900">
        {student.lastName}, {student.firstName}
      </h3>

      {/* Program Label*/}
      <div className="mt-1">
        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          {student.program}
        </p>
      </div>

      <div className="mt-3 text-sm text-gray-700">
        <p>Grade: {student.grade}</p>
        <p>Date of birth: {student.dateOfBirth}</p>
        <p className="text-gray-500 text-xs mt-2">student</p>
        <p className="text-gray-500 text-xs">email: {student.email}</p>
      </div>
    </div>
  );
}
