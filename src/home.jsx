import {
  Header,
  Project,
  Skills,
  About,
  Education,
  Projects,
  Footer,
  Sidebar,
  SkillLogo,
  ScrollToSection,
} from "./components/index.jsx";
import "./index.css";
function Home() {
  return (
    <>
      <div className="main-container">
        <div className="mainSidebar">
          <Sidebar />
        </div>

        <div className="maincontent">
          <Header />
          <section id="about">
            <h1 className="heading underline">About Me</h1>
            <About />
          </section>

          <section id="skills">
            <h1 className="heading underline">Skills</h1>
            <Skills />
          </section>

          <section id="education">
            <h1 className="heading underline">Education</h1>
            <Education />
          </section>

          <section id="My-Projects">
            <h1 className="heading underline">My-Projects</h1>
            <Projects />
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
