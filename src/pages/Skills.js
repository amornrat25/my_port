function Skills() {

  return (

    <div className="skills">

      <h1 className="skills-title">Skills</h1>
      <p className="skills-sub">My abilities</p>

      <div className="skills-container">

        {/* Hard Skill */}
        <div className="skills-box">

          <h2>Hard Skills</h2>

          <div className="skills-list">

            <div className="skill-item">
              <span>HTML</span>
              <small>Intermediate</small>
            </div>

            <div className="skill-item">
              <span>CSS</span>
              <small>Intermediate</small>
            </div>

            <div className="skill-item">
              <span>JavaScript</span>
              <small>Intermediate</small>
            </div>

            <div className="skill-item">
              <span>React</span>
              <small>Basic</small>
            </div>

            <div className="skill-item">
              <span>Bootstrap</span>
              <small>Intermediate</small>
            </div>

            <div className="skill-item">
              <span>Git</span>
              <small>Basic</small>
            </div>

          </div>

        </div>


        {/* Soft Skill */}
        <div className="skills-box">

          <h2>Soft Skills</h2>

          <div className="skills-list">

            <div className="skill-item">
              <span>Communication</span>
              <small>Good</small>
            </div>

            <div className="skill-item">
              <span>Teamwork</span>
              <small>Good</small>
            </div>

            <div className="skill-item">
              <span>Problem Solving</span>
              <small>Good</small>
            </div>

            <div className="skill-item">
              <span>Time Management</span>
              <small>Good</small>
            </div>

            <div className="skill-item">
              <span>Creativity</span>
              <small>Good</small>
            </div>

            <div className="skill-item">
              <span>Adaptability</span>
              <small>Good</small>
            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Skills