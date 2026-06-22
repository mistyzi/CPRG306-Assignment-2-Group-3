export default function StudentCard({ student, highlight }: any) {
  return (
    <div
      className={`p-5 rounded-xl bg-white shadow-sm border transition-all cursor-pointer ${
        highlight ? "border-blue-500 shadow-md" : "border-gray-200"
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-900">
        {student.lastName}, {student.firstName}
      </h3>

      <p className="text-sm text-gray-500 mt-1">{student.program}</p>

      <div className="mt-3 text-sm text-gray-700">
        <p>Grade: {student.grade}</p>
        <p>Date of birth: {student.dateOfBirth}</p>
        <p className="text-gray-500 text-xs mt-2">student</p>
        <p className="text-gray-500 text-xs">email: {student.email}</p>
      </div>
    </div>
  );
}
