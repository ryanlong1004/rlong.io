import React from "react";
import "../../styles/main.scss";

interface Props { }

export const About: React.FC<Props> = () => {
  return (
    <div id="about">
    <section className="page-section bg-primary text-white mb-0">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
          <div className="col-lg-12 ml-auto text-left">
            <p className="lead">
              Like art, software can be written in countless ways to achieve
              similar effects.
            </p>
            <p className="lead">
              But an engineer takes the time to produce something beautiful in
              its simplicity and elegance. They understand that intuitive source
              code, like a well written novel, should lead its reader through
              its workings. Engineers have a zest for innovation, a passion for
              quality, and a love for exploring the novel and unknown.
            </p>
            <p className="lead">
              The difference between writing software and creating art is simply
              the medium. It takes vision, planning, and attention to detail. It
              thrives on not only ideas and innovation, but on its creators
              sense of adventure.{" "}
            </p>
            <p className="lead">
              It takes a common goal, a goal that is straightforward and
              effortless to communicate. Discovering this is paramount to
              everyone being able to envision the goal. Only then can you and
              your team embark on the journey from concept to reality.
            </p>
            <p className="lead">
              I can rattle off the languages I've used, the paradigms in my tool
              belt, and all of the experience and lessons I've learned
              throughout my career, but I believe that my most defining
              characteristics can be expressed in one sentence.{" "}
            </p>
            <h3>Every day I strive to be a better engineer.</h3>
          </div>
        </div>
      </div>
      </section>
      </div>
  );
}


