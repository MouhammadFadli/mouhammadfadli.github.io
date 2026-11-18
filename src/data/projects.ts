// Verified GitHub repositories of github.com/MouhammadFadli (read via the GitHub API
// on 13 Nov 2026). Name, language and link only: no invented descriptions.
export interface CodeProject {
  id: string;
  name: string;
  repo: string;
  language: string;
}

const gh = "https://github.com/MouhammadFadli/";

export const codeProjects: CodeProject[] = [
  {
    id: "library",
    name: "Library Management System",
    repo: `${gh}LibraryManagementSystem`,
    language: "C++",
  },
  {
    id: "bank",
    name: "Bank Management System",
    repo: `${gh}Bank-System`,
    language: "C++",
  },
  {
    id: "rps",
    name: "Rock Paper Scissors",
    repo: `${gh}CPP-RockPaperScissors`,
    language: "C++",
  },
];

/** FADROX SPORT: experimental software project (repo language reported by GitHub: HTML). */
export const fadroxRepo = {
  repo: `${gh}fadrox-sport`,
  language: "HTML,CSS,JS",
};
