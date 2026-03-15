import { useState } from "react";

const transcriptData = [
  {
    id: "y1s1",
    label: "1st Semester 2024",
    period: "Semester 1 / 2024",
    gpa: "2.80",
    defaultOpen: false,
    courses: [
      { code: "030523105", name: "Computer Programming",             credits: 2, grade: "D+" },
      { code: "030523106", name: "Electronics Technology",           credits: 2, grade: "A"  },
      { code: "030523205", name: "Computer Programming Lab",         credits: 1, grade: "C"  },
      { code: "030523206", name: "Electronics Technology Lab",       credits: 1, grade: "A"  },
      { code: "030523500", name: "Database & Data Technology",       credits: 2, grade: "B+" },
      { code: "030523501", name: "Comp Netw Sys & Data Commu",       credits: 2, grade: "C"  },
      { code: "030523600", name: "Database & Data Tech Lab",         credits: 1, grade: "B+" },
      { code: "030523601", name: "Comp Netw Sys & Data Lab",         credits: 1, grade: "C"  },
      { code: "030933152", name: "Commu Eng & Report Writing",       credits: 3, grade: "B"  },
      { code: "030943111", name: "Differential Equations",           credits: 3, grade: "C+" },
      { code: "030953103", name: "Entrepreneurship",                 credits: 3, grade: "B"  },
    ],
  },
  {
    id: "y2s2",
    label: "2nd Semester 2024",
    period: "Semester 2 / 2024",
    gpa: "2.00",
    defaultOpen: false,
    courses: [
      { code: "030523107", name: "Microcontroller System",           credits: 2, grade: "D+" },
      { code: "030523118", name: "Object Oriented Programming",      credits: 2, grade: "D"  },
      { code: "030523124", name: "Web Application Development",      credits: 2, grade: "D+" },
      { code: "030523126", name: "Linux Operating Sys & Admin",      credits: 2, grade: "C+" },
      { code: "030523207", name: "Microcontroller System Lab",       credits: 1, grade: "D+" },
      { code: "030523218", name: "Object Oriented Program Lab",      credits: 1, grade: "D"  },
      { code: "030523224", name: "Web Application Develop Lab",      credits: 1, grade: "D+" },
      { code: "030523226", name: "Linux Org Sys & Admin Lab",        credits: 1, grade: "C+" },
      { code: "030523502", name: "Data Struc & Algo Anal",           credits: 2, grade: "D"  },
      { code: "030523602", name: "Data Struc & Algo Anal Lab",       credits: 1, grade: "D"  },
      { code: "030943112", name: "Matrices & Vector Analysis",       credits: 3, grade: "C+" },
      { code: "080303701", name: "Design Thinking",                  credits: 3, grade: "A"  },
    ],
  },
  {
    id: "y1s2",
    label: "1st Semester 2025",
    period: "Semester 1 / 2025",
    gpa: "2.57",
    defaultOpen: false,
    courses: [
      { code: "030523503", name: "Mobile Appl Development",          credits: 2, grade: "C+" },
      { code: "030523504", name: "Artificial Intelligence",          credits: 2, grade: "D+" },
      { code: "030523505", name: "Cybersecurity",                    credits: 2, grade: "C"  },
      { code: "030523604", name: "Artificial Intelligence Lab",      credits: 1, grade: "D+" },
      { code: "030523603", name: "Mobile Appl Development Lab",      credits: 1, grade: "C+" },
      { code: "030523605", name: "Cybersecurity Laboratory",         credits: 1, grade: "C"  },
      { code: "030523701", name: "Cloud Computing",                  credits: 2, grade: "C"  },
      { code: "030523801", name: "Cloud Computing Laboratory",       credits: 1, grade: "C"  },
      { code: "030923102", name: "Sciences in Daily Life",           credits: 3, grade: "A"  },
      { code: "030923103", name: "Sci & Tech for Qua of Life & Soc", credits: 3, grade: "B+" },
      { code: "03093155",  name: "Engl Convers for Daily Life",      credits: 3, grade: "C+" },
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

function totalAllCredits() {
  return transcriptData.reduce((sum, t) => sum + totalCredits(t.courses), 0);
}

function cumulativeGPA() {
  const gpas = transcriptData.map((t) => parseFloat(t.gpa));
  return (gpas.reduce((a, b) => a + b, 0) / gpas.length).toFixed(2);
}

function TermBlock({ term }) {
  const [open, setOpen] = useState(term.defaultOpen);

  return (
    <div className="term-block">
      <div className="term-header" onClick={() => setOpen(!open)}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="term-name" style={{ color: "#1a0f08" }}>{term.label}</span>
          <span style={{ color: "#6b4f32", fontSize: "0.8rem" }}>{term.period}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="term-gpa">GPA {term.gpa}</span>
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              color: "#6b4f32",
            }}
          >
            <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                  <td style={{ color: "#6b4f32", fontSize: "0.78rem" }}>{course.code}</td>
                  <td style={{ color: "#2c1a0e" }}>{course.name}</td>
                  <td style={{ textAlign: "center", color: "#2c1a0e" }}>{course.credits}</td>
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
            <div style={{ color: "#4e3822" }}>
              Total Credits: <span style={{ color: "#1a0f08", fontWeight: 500 }}>{totalCredits(term.courses)}</span>
            </div>
            <div style={{ color: "#4e3822" }}>
              Semester GPA: <span style={{ color: "#1a0f08", fontWeight: 500 }}>{term.gpa}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Transcript() {
  return (
    <div className="about">

      {/* ---- Heading ---- */}
      <h1 className="about-title" style={{ color: "#1a0f08" }}>Academic Transcript</h1>
      <p className="about-sub" style={{ color: "#6b4f32" }}>
        Bachelor of Industrial Technology · Electronics Technology
      </p>

      {/* ---- Summary Cards ---- */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "40px",
        flexWrap: "wrap",
      }}>
        <div className="about-card">
          <h4>{transcriptData.length}</h4>
          <p>Semesters</p>
        </div>
        <div className="about-card">
          <h4>{totalAllCredits()}</h4>
          <p>Total Credits</p>
        </div>
        <div className="about-card">
          <h4>{cumulativeGPA()}</h4>
          <p>Cumulative (GPAX)</p>
        </div>
      </div>

      {/* ---- Term Blocks ---- */}
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {transcriptData.map((term) => (
          <TermBlock key={term.id} term={term} />
        ))}
      </div>

    </div>
  );
}

export default Transcript;