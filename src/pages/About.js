function About() {
  return (
    <div className="about">

      {/* ---- Heading ---- */}
      <h1 className="about-title" style={{ color: "#1a0f08" }}>About Me</h1>
      <p className="about-sub" style={{ color: "#6b4f32" }}>My Education</p>

      {/* ---- Timeline ---- */}
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-left">
            <h4 style={{ color: "#1a0f08" }}>2024 – 2025</h4>
            <p style={{ color: "#6b4f32" }}>Bachelor's Degree</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3 style={{ color: "#1a0f08" }}>University</h3>
            <p style={{ color: "#4e3822" }}>
              King Mongkut's University of Technology North Bangkok,<br />
              Department of Electronic Technology (Computer).
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-left">
            <h4 style={{ color: "#1a0f08" }}>2022 – 2024</h4>
            <p style={{ color: "#6b4f32" }}>High Vocational Certificate</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3 style={{ color: "#1a0f08" }}>Higher Vocational Certificate</h3>
            <p style={{ color: "#4e3822" }}>
              Ratchaburi Technical College, Electronics Department.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-left">
            <h4 style={{ color: "#1a0f08" }}>2017 – 2022</h4>
            <p style={{ color: "#6b4f32" }}>High School</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3 style={{ color: "#1a0f08" }}>High School</h3>
            <p style={{ color: "#4e3822" }}>
              Pakthopittayakom School, Science and Mathematics Program.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;