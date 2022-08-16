import "./intro.css";
import { Col, Row, Container as div } from "reactstrap";

const Intro = () => {
  return (
    <div>
      <div className="left-wrapper">
        <h2 className="introGreet">Hi,</h2>
        <h1 className="introName">I'm David,</h1>
        <div className="intro-title">
          <div className="title-wrapper">
            <div className="title-item">
              <span className="hiddenSpan">.</span>React Developer
            </div>
            <div className="title-item">
              <p>
                <span className="hiddenSpan">..</span>Java Developer
              </p>
            </div>
            <div className="title-item">
              <span className="hiddenSpan">.</span>Web3 Enthusiast
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
