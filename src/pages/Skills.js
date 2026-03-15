import { useEffect, useRef, useState } from "react";

const hardSkills = [
  { name: "HTML",        level: "Intermediate", percent: 65 },
  { name: "CSS",         level: "Intermediate", percent: 65 },
  { name: "JavaScript",  level: "Intermediate", percent: 65 },
  { name: "React",       level: "Basic",        percent: 70 },
  { name: "Bootstrap",   level: "Intermediate", percent: 70 },
  { name: "Git",         level: "Basic",        percent: 60 },
];

const softSkills = [
  { name: "Communication",   level: "Good", percent: 80 },
  { name: "Teamwork",        level: "Good", percent: 85 },
  { name: "Problem Solving", level: "Good", percent: 75 },
  { name: "Time Management", level: "Good", percent: 75 },
  { name: "Creativity",      level: "Good", percent: 70 },
  { name: "Adaptability",    level: "Good", percent: 80 },
];

// ---- Progress bar ที่ animate เมื่อ scroll มาถึง ----
function SkillBar({ name, level, percent, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percent), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent, delay]);

  return (
    <div ref={ref} style={{ marginBottom: "18px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: "6px",
      }}>
        <span style={{ fontWeight: 500, fontSize: "0.9rem", color: "#1a0f08" }}>
          {name}
        </span>
        <span style={{ fontSize: "0.72rem", color: "#6b4f32", letterSpacing: "0.06em" }}>
          {level} · {percent}%
        </span>
      </div>

      {/* Track */}
      <div style={{
        width: "100%",
        height: "6px",
        background: "#e8d8c0",
        borderRadius: "99px",
        overflow: "hidden",
      }}>
        {/* Fill */}
        <div style={{
          height: "100%",
          width: `${width}%`,
          borderRadius: "99px",
          background: "linear-gradient(90deg, #c9972e, #e8c46a)",
          transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
        }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">

      <h1 className="skills-title">Skills</h1>
      <p className="skills-sub">My Abilities</p>

      <div className="skills-container">

        {/* Hard Skills */}
        <div className="skills-box">
          <h2>Hard Skills</h2>
          {hardSkills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 80} />
          ))}
        </div>

        {/* Soft Skills */}
        <div className="skills-box">
          <h2>Soft Skills</h2>
          {softSkills.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 80} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;