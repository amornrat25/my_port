function About() {

  return (

    <div className="about">

      <h1 className="about-title">About Me</h1>
      <p className="about-sub">My Education</p>

      <div className="timeline">

        {/* item 1 */}
        <div className="timeline-item">

          <div className="timeline-left">
            <h4>2023 - 2025</h4>
            <p>Bachelor's Degree</p>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-right">
            <h3>University</h3>
            <p>
              Studying computer science and learning web development,
              programming, and software design.
            </p>
          </div>

        </div>


        {/* item 2 */}
        <div className="timeline-item">

          <div className="timeline-left">
            <h4>2020 - 2023</h4>
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


        {/* item 3 */}
        <div className="timeline-item">

          <div className="timeline-left">
            <h4>2017 - 2020</h4>
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

    </div>

  )

}

export default About