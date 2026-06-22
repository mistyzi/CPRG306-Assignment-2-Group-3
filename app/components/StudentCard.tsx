import React from "react";

interface StudentCardProps {
  firstName: string;
  lastName: string;
  email: string;
  grade: string;
  program: string;
  dateOfBirth: string;
  highlight?:boolean;
}


const StudentCard = ({
    firstName,
    lastName,
    email,
    grade,
    program,
    dateOfBirth,
    highlight=false,


 
}: StudentCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 flex flex-col gap-3
    border-2
    ${
      highlight
        ? "border-blue-500 shadow-md shadow-blue-100"
        : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
    }
    `}
    >
        {/* Name + Program */}
        <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-base">{lastName},{firstName}</h3>
            <p className="text-sm text-gray-500">{program}</p>
        </div>

        {/* Grade + Year of welcoming in to this wicked world */}
        <div className="flex items-center gap-4 text-sm">
            <span className="font-semibold text-gray-800"> Grade: {grade}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600"> Date of birth: {dateOfBirth}</span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed"> student email:{email}</p>

      
        
    </div>
  );
};

export default StudentCard;