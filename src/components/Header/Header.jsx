import styles from "./Header.module.css";
import { GithubIcon, LinkedinIcon } from "../Icons/Icons";
import { useState } from "react";

function Header() {
  const [display, setDisplay] = useState(false);
  function toggleMenu() {
    setDisplay((prev) => !prev);
  }

  const email = "grant.o.roots@gmail.com";

  function copyEmail() {
    navigator.clipboard.writeText(email);
  }

  return (
    <header className={styles.header}>
      <h1>Grant Roots</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        height="100"
        viewBox="0 0 24 24"
        className={`${styles.svg} ${styles.burger}`}
        onClick={toggleMenu}
      >
        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
      </svg>
      <div className={`${styles.sidebarMenu} ${display ? styles.display : ""}`}>
        <svg
          viewBox="-4.5 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          className={styles.sidebarMenuClose}
          onClick={toggleMenu}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>arrow_right [#336]</title> <desc>Created with Sketch.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-305.000000, -6679.000000)"
                fill="#000000"
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                    id="arrow_right-[#336]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <h2>Contact Me</h2>
        <div onClick={copyEmail} style={{ cursor: "pointer" }}>
          <h3>Email - Click to Copy</h3>
          <div>grant.o.roots@gmail.com</div>
        </div>
        <a
          href="https://github.com/GrantRoots"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Github</div>
          <GithubIcon></GithubIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/grant-roots/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Linkedin</div>
          <LinkedinIcon></LinkedinIcon>
        </a>
      </div>
    </header>
  );
}

export default Header;
