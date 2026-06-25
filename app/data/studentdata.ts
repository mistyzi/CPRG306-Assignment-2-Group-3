// Inital Data
export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  grade: string;
  program: string;
  dateOfBirth: string;
};

export const students: Student[] = [
  {
    id: "S001",
    firstName: "Amara",
    lastName: "Okafor",
    email: "amara.okafor@edu.sait.ca",
    grade: "A",
    program: "Software Development",
    dateOfBirth: "2004-02-13",
  },
  {
    id: "S002",
    firstName: "Liam",
    lastName: "Nguyen",
    email: "liam.nguyen@edu.sait.ca",
    grade: "A-",
    program: "Software Development",
    dateOfBirth: "2003-08-28",
  },
  {
    id: "S003",
    firstName: "Sofia",
    lastName: "Ramirez",
    email: "sofia.ramirez@edu.sait.ca",
    grade: "B+",
    program: "Information Technology",
    dateOfBirth: "2004-05-19",
  },
  {
    id: "S004",
    firstName: "James",
    lastName: "Park",
    email: "james.park@edu.sait.ca",
    grade: "A",
    program: "Software Development",
    dateOfBirth: "2003-11-02",
  },
  {
    id: "S005",
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@edu.sait.ca",
    grade: "A-",
    program: "Data Analytics",
    dateOfBirth: "2004-07-14",
  },
  {
    id: "S006",
    firstName: "Ethan",
    lastName: "Brooks",
    email: "ethan.brooks@edu.sait.ca",
    grade: "B",
    program: "Software Development",
    dateOfBirth: "2004-03-09",
  },
  {
    id: "S007",
    firstName: "Mei",
    lastName: "Chen",
    email: "mei.chen@edu.sait.ca",
    grade: "A",
    program: "Information Technology",
    dateOfBirth: "2003-10-22",
  },
  {
    id: "S008",
    firstName: "Lucas",
    lastName: "Tremblay",
    email: "lucas.tremblay@edu.sait.ca",
    grade: "B+",
    program: "Data Analytics",
    dateOfBirth: "2003-12-05",
  },
];
