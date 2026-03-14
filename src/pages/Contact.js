import { FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {

  return (

    <div className="contact">

      {/* Instagram */}
      <a 
        href="https://instagram.com/amornrat"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaInstagram className="icon"/>
        <h3>Instagram</h3>
        <p>@amornrat</p>
      </a>


      {/* Email */}
      <a 
        href="mailto:amornrat@email.com"
        className="contact-item"
      >
        <FaEnvelope className="icon"/>
        <h3>Email</h3>
        <p>amornrat@email.com</p>
      </a>


      {/* X */}
      <a 
        href="https://x.com/amornrat"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <FaXTwitter className="icon"/>
        <h3>X</h3>
        <p>@amornrat</p>
      </a>

    </div>

  )

}

export default Contact