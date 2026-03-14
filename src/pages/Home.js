import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="hero-container">

      {/* card profile */}
      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/200"
          alt="profile"
          className="profile-img"
        />

        <h2>Amornrat</h2>

        <div className="line"></div>

        <p className="job">Web Developer</p>

        <div className="social">

          <span>f</span>
          <span>t</span>
          <span>in</span>
          <span>ig</span>

        </div>

      </div>


      {/* text section */}
      <div className="hero-text">

        <h1>Hello</h1>

        <h3>Here's who I am & what I do</h3>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={() => navigate("/about")}
          >
            ABOUT ME
          </button>

          <button
            className="btn-outline"
            onClick={() => navigate("/portfolio")}
          >
            PROJECTS
          </button>

        </div>

        <p>
          I'm a web developer who enjoys building modern websites
          using React and new technologies.
        </p>

        <p>
          This portfolio shows some of my projects and skills.
        </p>

      </div>

    </div>

  );
}

export default Home;