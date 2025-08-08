import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import ExploreTools from "./components/ExploreTools";
import WorkShow from "./components/WorkShow";
import Education from "./components/Education";
import Endcontact from "./components/Endcontact";

export default function page() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Banner />
      </section>

      <section>
        <AboutMe />
      </section>
      <section id="skills">
        <ExploreTools />
      </section>

      <section id="projects">
        <WorkShow />
        <Education />
      </section>

      <section id="contact">
        <Endcontact />
      </section>
    </div>
  );
}
