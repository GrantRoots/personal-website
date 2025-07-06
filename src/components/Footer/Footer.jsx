import styles from "./Footer.module.css";
import { GithubIcon, LinkedinIcon } from "../Icons/Icons";

function Footer() {
  const email = "grant.o.roots@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email);
  }

  return (
    <footer className={styles.footer}>
      <h2>Contact Me</h2>
      <div className={styles.footerContent}>
        <div onClick={copyEmail} style={{ cursor: "pointer" }}>
          <h3>Email - Click to Copy</h3>
          <div>grant.o.roots@gmail.com</div>
        </div>
        <div>
          <a
            href="https://github.com/GrantRoots"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon></GithubIcon>
            <div>Github</div>
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/grant-roots/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon></LinkedinIcon>
          <div>Linkedin</div>
        </a>
        <a href="">Resume</a>
      </div>
    </footer>
  );
}

export default Footer;
