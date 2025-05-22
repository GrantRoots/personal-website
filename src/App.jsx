import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className={styles.hero}>
          <h1>Grant Roots</h1>
          <img src="" alt="Picture of Me" />
          <h3>Full Stack Web Developer</h3>
        </div>
        <div>
          <h1>What I do</h1>
          <div>I make full stack web apps.</div>
        </div>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
