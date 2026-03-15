import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="hero-container">

      {/* card profile */}
      <div className="profile-card">

        <img
          src="/certificates/me1.jpg"
          alt="profile"
          className="profile-img"
        />

        <h2>Amornrat</h2>

        <div className="line"></div>

        <p className="job">Web Developer</p>

        <div className="social">

          <span>f</span>
          <span>ig</span>
          <span>mail</span>
          <span>x</span>

        </div>

      </div>


      {/* text section */}
      <div className="hero-text">

        <h1>Hello</h1>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={() => navigate("/about")}
          >
            ABOUT ME
          </button>

          <button
            className="btn-outline"
            onClick={() => navigate("/activities")}
          >
            Activities
          </button>

        </div>

        <p>
         นักศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br/>
         สาขาวิชาเทคโนโลยีอิเล็กทรอนิกส์ (คอมพิวเตอร์)
         

        </p>

        <p>   
          สนใจด้าน IoT, Hardware และการพัฒนา Web Application
        </p>

      </div>

    </div>

  );
}

export default Home;