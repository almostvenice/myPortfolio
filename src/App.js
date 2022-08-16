import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Parallax, Background } from "react-parallax";
import Laptop from "./app/assets/laptop.jpg";
import Intro from "./components/Intro";
import ProjectsSection from "./sections/projects/ProjectsSection";
import AboutMe from "./sections/about/AboutMe";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  const [stylePath] = useState("//fonts.googleapis.com/css?family=Lobster");

  const [avatarURL, setAvatarURL] = useState()
  const [githubBio, setGithubBio] = useState()

  useEffect(() => {
    fetch("https://api.github.com/users/almostvenice")
      .then((res) => res.json())
      .then(
        (result) => {
          setGithubBio(result.bio)
          setAvatarURL(result.avatar_url)
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div id="home" className="App">
      <div>
        <link rel="stylesheet" type="text/css" href={stylePath} />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </div>

      <div id="parallaxInfo">
        <img id="profileImg" className="bob" src={avatarURL} alt="self" />
        <br/>
        {githubBio}
        <div className="bob-info-2">
          <h5 id="myBio">
            I'm originally from L.A. but moved to Phoenix, AZ because of the
            scorching hot temperatures and low cost of living, but mostly the
            low cost of living. Most of my time is spent on a training program
            for Java developers called FastTrack. Currently in the training we
            are working as a team to create RESTful APIs using Spring and
            PostgreSQL. When I'm not coding or studying with my cohort, I'm
            either troubleshooting or tinkering with my 3D printer, playing
            video games or traveling with my fiancé and son. During the summer
            we tend to stay at home due to the heat, but we enjoy hiking when it
            cools down.{" "}
          </h5>
        </div>
      </div>

      <Parallax strength={550}>
        <Background className="custom-bg">
          <div id="parallax">
            <img id="laptop" src={Laptop} alt="laptop with coffee" />
          </div>
        </Background>
        <div className="headerCont">
          <Header />
        </div>
      </Parallax>
      <div className="introCont">
        <Intro />
      </div>
      <Element id="aboutMeSection" name="aboutMeSection">
        <div className="bodyCont">
          <AboutMe />
        </div>
      </Element>
      <div id="projectSection" className="projectsSection">
        <ProjectsSection />
      </div>
      <div id="contactForm">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
