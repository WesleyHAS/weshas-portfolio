import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer fixed-bottom bg-light p-3">
        <p>Your Footer Content Here</p>
        <FaGithub className="mx-2" />
        <CiLinkedin className="mx-2" />
        <FaTwitch className="mx-2" />
      </div>
    </div>
  );
}
