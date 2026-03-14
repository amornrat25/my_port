import { useState } from "react";
 
const transcriptData = [
  {
    id: "y2s2",
    label: "2nd Semester 2024",
    period: "Semester 2 / 2024",
    gpa: "2.80",
    defaultOpen: true,
    courses: [
      { code: "03052107", name: "Microcontroller System",           credits: 2, grade: "D+" },
      { code: "03052118", name: "Object Oriented Programming",      credits: 2, grade: "D"  },
      { code: "03052124", name: "Web Application Development",      credits: 2, grade: "D+" },
      { code: "03052126", name: "Linux Operating Sys & Admin",      credits: 2, grade: "C+" },
      { code: "03052207", name: "Microcontroller System Lab",       credits: 1, grade: "D"  },
      { code: "03052218", name: "Object Oriented Program Lab",      credits: 1, grade: "D"  },
      { code: "03052224", name: "Web Application Develop Lab",      credits: 1, grade: "D+" },
      { code: "03052226", name: "Linux Org Sys & Admin Lab",        credits: 1, grade: "D"  },
      { code: "03052502", name: "Data Struc & Algo Anal",           credits: 3, grade: "C+" },
      { code: "03052602", name: "Data Struc & Algo Anal Lab",       credits: 1, grade: "D"  },
      { code: "03094112", name: "Matrices & Vector Analysis",       credits: 3, grade: "D"  },
      { code: "08030701", name: "Design Thinking",                  credits: 3, grade: "A"  },
    ],
  },
  {
    id: "y1s2",
    label: "1st Semester 2025",
    period: "Semester 1 / 2025",
    gpa: "2.57",
    defaultOpen: false,
    courses: [
      { code: "03052301", name: "Mobile Appl. Development",         credits: 2, grade: "C"  },
      { code: "03052304", name: "Artificial Intelligence",          credits: 2, grade: "D+" },
      { code: "03052305", name: "Cybersecurity",                    credits: 2, grade: "C+" },
      { code: "03052401", name: "Artificial Intelligence Lab",      credits: 1, grade: "C+" },
      { code: "03052403", name: "Mobile Appl. Development Lab",     credits: 1, grade: "D+" },
      { code: "03052404", name: "Cybersecurity Laboratory",         credits: 1, grade: "C"  },
      { code: "03052605", name: "Cloud Computing",                  credits: 2, grade: "C"  },
      { code: "03052701", name: "Cloud Computing Laboratory",       credits: 1, grade: "A"  },
      { code: "03052802", name: "Sciences in Daily Life & Soc",     credits: 3, grade: "B+" },
      { code: "03052102", name: "Sci & Tech for Qua of Life & Soc", credits: 3, grade: "B+" },
      { code: "03093103", name: "Engl. Convers for Daily Life",     credits: 2, grade: "C+" },
      { code: "03093155", name: "Engl. Convers for Daily Life",     credits: 2, grade: "C+" },
    ],
  },
  {
    id: "y1s1",
    label: "1st Semester 2024",
    period: "Semester 1 / 2024",
    gpa: "2.80",
    defaultOpen: false,
    courses: [
      { code: "03052105", name: "Computer Programming",             credits: 2, grade: "D+" },
      { code: "03052106", name: "Electronics Technology",           credits: 2, grade: "C"  },
      { code: "03052205", name: "Computer Programming Lab",         credits: 1, grade: "A"  },
      { code: "03052206", name: "Electronics Technology Lab",       credits: 1, grade: "C"  },
      { code: "03052300", name: "Database & Data Technology",       credits: 2, grade: "C"  },
      { code: "03052500", name: "Comp Netw Sys & Data Commu",       credits: 2, grade: "B+" },
      { code: "03052501", name: "Comp Netw Sys & Data Commu",       credits: 2, grade: "A"  },
      { code: "03052600", name: "Database & Data Tech Lab",         credits: 1, grade: "C"  },
      { code: "03052603", name: "Comp Netw Sys & Data Lab",         credits: 1, grade: "B+" },
      { code: "03052152", name: "Commu & Report Writing",           credits: 3, grade: "C+" },
      { code: "03094111", name: "Differential Equations",           credits: 3, grade: "C+" },
      { code: "03095103", name: "Entrepreneurship",                 credits: 3, grade: "B"  },
    ],
  },
];
 
function gradeClass(grade) {
  if (grade === "IP")         return "grade-ip";
  if (grade.startsWith("A")) return "grade-a";
  if (grade.startsWith("B")) return "grade-b";
  return "grade-c";
}
 
function totalCredits(courses) {
  return courses.reduce((sum, c) => sum + c.credits, 0);
}
 
function TermBlock({ term }) {
  const [open, setOpen] = useState(term.defaultOpen);
 
  return (
    <div className="term-block">
      <div className="term-header" onClick={() => setOpen(!open)}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="term-name">{term.label}</span>
          <span style={{ color: "var(--text-soft)", fontSize: "0.8rem" }}>
            {term.period}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="term-gpa">GPA {term.gpa}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              color: "var(--text-soft)",
            }}
          >
            <path
              d="M2.5 5L7 9.5L11.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
 
      {open && (
        <div>
          <table className="course-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Name</th>
                <th style={{ textAlign: "center" }}>Credits</th>
                <th style={{ textAlign: "center" }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {term.courses.map((course, i) => (
                <tr key={`${course.code}-${i}`}>
                  <td style={{ color: "var(--text-soft)", fontSize: "0.78rem" }}>
                    {course.code}
                  </td>
                  <td>{course.name}</td>
                  <td style={{ textAlign: "center" }}>{course.credits}</td>
                  <td style={{ textAlign: "center" }}>
                    <span className={`grade-badge ${gradeClass(course.grade)}`}>
                      {course.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
 
          <div className="term-summary">
            <div>
              Total Credits: <span>{totalCredits(term.courses)}</span>
            </div>
            <div>
              Semester GPA: <span>{term.gpa}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p className="about-sub">My Education</p>
 
      {/* ---- Timeline ---- */}
      <div className="timeline">
 
        <div className="timeline-item">
          <div className="timeline-left">
            <h4>2023 – 2025</h4>
            <p>Bachelor's Degree</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3>University</h3>
            <p>
              Bachelor of Industrial Technology (Electronics Technology),
              majoring in Computer Technology and software development.
            </p>
          </div>
        </div>
 
        <div className="timeline-item">
          <div className="timeline-left">
            <h4>2020 – 2023</h4>
            <p>High School</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3>High School</h3>
            <p>
              Focused on science and technology subjects and started
              learning programming basics.
            </p>
          </div>
        </div>
 
        <div className="timeline-item">
          <div className="timeline-left">
            <h4>2017 – 2020</h4>
            <p>Secondary School</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3>Secondary School</h3>
            <p>
              Developed interest in computers and technology which
              inspired my journey in programming.
            </p>
          </div>
        </div>
 
      </div>
 
      {/* ---- Transcript ---- */}
      <h2
        className="about-title"
        style={{ fontSize: "1.8rem", marginTop: "70px", marginBottom: "6px" }}
      >
        Academic Transcript
      </h2>
      <p className="about-sub" style={{ marginBottom: "28px" }}>
        Bachelor of Industrial Technology · Electronics Technology
      </p>
 
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {transcriptData.map((term) => (
          <TermBlock key={term.id} term={term} />
        ))}
      </div>
    </div>
  );
}
 
export default About;