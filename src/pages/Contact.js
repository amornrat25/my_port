import { FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {

  return (

    <div className="contact">

      {/* Facebook */}
      <a 
        href="https://www.facebook.com/share/1atKqFL16A/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaFacebook className="icon"/>
        <h3>Facebook</h3>
        <p>amornrat</p>
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/ap_p25/?next="
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaInstagram className="icon"/>
        <h3>Instagram</h3>
        <p>ap_p25</p>
      </a>


      {/* Email */}
      <a        
        href="mailto:amornrat@email.com"
        className="contact-item"
      >
        <FaEnvelope className="icon"/>
        <h3>Email</h3>
        <p>s6703052411279<br/>@email.kmutnb.ac.th</p>
      </a>


      {/* X */}
      <a 
        href="https://x.com/Polly_Ploy25"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaXTwitter className="icon"/>
        <h3>X</h3>
        <p>polly_ploy25</p>
      </a>

    </div>

  )

}

export default Contact