function About() {
  return (
    <div className="about">

      {/* ---- Heading ---- */}
      <h1 className="about-title" style={{ color: "#1a0f08" }}>About Me</h1>

      {/* ---- Self Introduction ---- */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "60px",
        marginBottom: "70px",
        flexWrap: "wrap",
      }}>

        {/* รูปโปรไฟล์ */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/certificates/me1.jpg"
            alt="profile"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #e8d8c0",
              boxShadow: "0 12px 40px rgba(110,75,40,0.16)",
            }}
          />
        </div>

        {/* ข้อความแนะนำตัว */}
        <div style={{ flex: 1, minWidth: "260px" }}>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#1a0f08",
            margin: "0 0 4px",
          }}>
            สวัสดีค่ะ 👋
          </h2>

          <p style={{
            fontSize: "0.82rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#6b4f32",
            margin: "0 0 20px",
          }}>
          </p>

          <p style={{
            color: "#4e3822",
            lineHeight: "1.9",
            fontSize: "0.95rem",
            marginBottom: "16px",
          }}>
            ชื่อนางสาวอมรรัตน์ ภู่เจริญ (พลอย) กำลังศึกษาอยู่ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br />
            คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม สาขาวิชาเทคโนโลยีอิเล็กทรอนิกส์ (คอมพิวเตอร์)<br />
            มีความสนใจด้าน IoT และการพัฒนาระบบฮาร์ดแวร์ที่สามารถเชื่อมต่อกับโลกดิจิทัลได้
          </p>

          <p style={{
            color: "#4e3822",
            lineHeight: "1.9",
            fontSize: "0.95rem",
            marginBottom: "28px",
          }}>
            ชื่นชอบการสร้างโปรเจกต์ที่ผสานระหว่างซอฟต์แวร์และฮาร์ดแวร์เข้าด้วยกัน<br/>
            และกำลังพัฒนาทักษะด้าน Web Development เพื่อต่อยอดสู่การทำงานจริงในอนาคต
          </p>

          {/* Tags ความสนใจ */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["IoT / Hardware", "Web Development", "Electronics", "Programming"].map((tag) => (
              <span key={tag} style={{
                padding: "6px 16px",
                background: "#e8d8c0",
                color: "#4e3822",
                borderRadius: "99px",
                fontSize: "0.78rem",
                letterSpacing: "0.04em",
                fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* ---- Education Heading ---- */}
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2rem",
        fontWeight: 400,
        color: "#1a0f08",
        textAlign: "center",
        marginBottom: "6px",
      }}>
        ประวัติการศึกษา
      </h2>
      <p style={{
        textAlign: "center",
        color: "#6b4f32",
        fontSize: "0.82rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        marginBottom: "0",
      }}>
        My Education
      </p>

      {/* ---- Timeline ---- */}
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-left">
            <h4 style={{ color: "#1a0f08" }}>2024 – 2025</h4>
            <p style={{ color: "#6b4f32" }}>ปริญญาตรี</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3 style={{ color: "#1a0f08" }}>มหาวิทยาลัย</h3>
            <p style={{ color: "#4e3822" }}>
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br />
              สาขาเทคโนโลยีอิเล็กทรอนิกส์ (คอมพิวเตอร์)
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-left">
            <h4 style={{ color: "#1a0f08" }}>2022 – 2024</h4>
            <p style={{ color: "#6b4f32" }}>ปวส.</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3 style={{ color: "#1a0f08" }}>ประกาศนียบัตรวิชาชีพชั้นสูง</h3>
            <p style={{ color: "#4e3822" }}>
              วิทยาลัยเทคนิคราชบุรี สาขาอิเล็กทรอนิกส์
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-left">
            <h4 style={{ color: "#1a0f08" }}>2017 – 2022</h4>
            <p style={{ color: "#6b4f32" }}>มัธยมศึกษา</p>
          </div>
          <div className="timeline-dot"></div>
          <div className="timeline-right">
            <h3 style={{ color: "#1a0f08" }}>มัธยมศึกษา</h3>
            <p style={{ color: "#4e3822" }}>
              โรงเรียนปากท่อพิทยาคม แผนการเรียนวิทย์-คณิต
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;