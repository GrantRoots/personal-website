import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import {
  ReactIcon,
  NodejsIcon,
  ExpressIcon,
  PostgresqlIcon,
  PrismaIcon,
  JavascriptIcon,
} from "./components/Icons/Icons.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <img src="" alt="Picture of Me" />
          <h2>Full Stack Javascript Developer</h2>
          <p>
            Hello I'm Grant! I'm a full stack web developer with a passion for
            backend development. I. Love. Learning.
          </p>
        </section>
        <section>
          <h2>My Projects</h2>
          <div className={`${styles.project} link ${styles.left}`}>
            <div className={styles.imageContainer}>
              <img src="/odinstagram1.png" alt="Odin Book Project" />
              <img src="/odinstagram2.png" alt="" />
            </div>
            <h2>Odinstagram</h2>
            <div>
              <a
                href="https://odinsta-gram.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
              <a
                href="https://github.com/GrantRoots/odinstagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
            <p>
              Social media app taking inspiration from instagram. This was the
              final project for The Odin Project cirriculum. And is the project
              I'm most proud of!
            </p>
            <div className={styles.icon}>
              <ReactIcon></ReactIcon>
              <NodejsIcon></NodejsIcon>
              <ExpressIcon></ExpressIcon>
              <PostgresqlIcon></PostgresqlIcon>
              <PrismaIcon></PrismaIcon>
            </div>
          </div>
          <div className={`${styles.project} link ${styles.right}`}>
            <div className={styles.imageContainer}>
              <img src="/blogapi2.png" alt="Blog Api Project" />
              <img src="/blogapi1.png" alt="Blog Api Project" />
            </div>
            <h2>Blog Api</h2>
            <div>
              <a
                href="https://write-blog-api.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Frontend
              </a>
              <a
                href="https://read-blog-api.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Frontend
              </a>
              <a
                href="https://github.com/GrantRoots/blog-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
            <p>
              Blogging app that uses two frontends that interact with the same
              api. One frontend is for the authors and the other is for the
              readers / commenters.
            </p>
            <div className={styles.icon}>
              <ReactIcon></ReactIcon>
              <NodejsIcon></NodejsIcon>
              <ExpressIcon></ExpressIcon>
              <PostgresqlIcon></PostgresqlIcon>
              <PrismaIcon></PrismaIcon>
            </div>
          </div>
          <div className={`${styles.project} link ${styles.left}`}>
            <div className={styles.imageContainer}>
              <img src="/messagingapp1.png" alt="Messaging App Project" />
              <img src="/messagingapp2.png" alt="Messaging App Project" />
            </div>
            <h2>Messaging App</h2>
            <div>
              <a
                href="https://messaging-app-gr.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
              <a
                href="https://github.com/GrantRoots/messaging-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
            <p>
              This is a simple messaging app like the one from an iphone. Users
              create chatrooms and can send messages back and forth in them.
            </p>
            <div className={styles.icon}>
              <ReactIcon></ReactIcon>
              <NodejsIcon></NodejsIcon>
              <ExpressIcon></ExpressIcon>
              <PostgresqlIcon></PostgresqlIcon>
              <PrismaIcon></PrismaIcon>
            </div>
          </div>
          <div className={`${styles.project} link ${styles.right}`}>
            <div className={styles.imageContainer}>
              <img src="/whereswaldo1.png" alt="Wheres Waldo Project" />
              <img src="/whereswaldo2.png" alt="Wheres Waldo Project" />
            </div>
            <h2>Wheres Waldo</h2>
            <div>
              <a
                href="https://whereswaldo-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App
              </a>
              <a
                href="https://github.com/GrantRoots/wheres-waldo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
            <p>
              Super fun project that's the "Where's Waldo" game. I store the
              images positions into the database on page load. Then check the
              submitted click to those coordinates.
            </p>
            <div className={styles.icon}>
              <ReactIcon></ReactIcon>
              <NodejsIcon></NodejsIcon>
              <ExpressIcon></ExpressIcon>
              <PostgresqlIcon></PostgresqlIcon>
              <PrismaIcon></PrismaIcon>
            </div>
          </div>
          <div className={`${styles.project} link ${styles.left}`}>
            <div className={styles.imageContainer}>
              <img src="/bst.png" alt="Binary Search Tree Project" />
            </div>
            <h2>Binary Search Tree</h2>
            <div>
              <a
                href="https://github.com/GrantRoots/binary-search-trees"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </a>
            </div>
            <p>
              Creates and runs operations on a BST. Project I made while
              learning about data structures and algorithms. I really enjoyed
              using recursion and the abstract thinking that it required.
            </p>
            <JavascriptIcon></JavascriptIcon>
          </div>
        </section>
        <section>
          <h2>My Github</h2>
          <a href="https://github.com/GrantRoots">github.com/GrantRoots</a>
          <p className={styles.githubP}>
            A lot of smaller less presentable projects. Check it out to see what
            I've made along my learning journey.
          </p>
        </section>
        <section>
          <h2>Code for this website :)</h2>
          <a
            href="https://github.com/GrantRoots/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/GrantRoots/personal-website
          </a>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
