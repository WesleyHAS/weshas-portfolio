import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer fixed-bottom p-3">
        <a
          href="https://github.com/WesleyHAS"
          target="_blank"
          className="mx-3 icons"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/wesleyhas/"
          target="_blank"
          className="mx-3 icons"
        >
          <CiLinkedin size={30} />
        </a>
        <a
          href="https://www.twitch.tv/wesleyhas"
          target="_blank"
          className="mx-3 icons"
        >
          <FaTwitch size={30} />
        </a>
      </div>
    </div>
  );
}
