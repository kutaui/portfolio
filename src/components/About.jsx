import styles from "../css/About.module.css";
import App from "../App.jsx";
import { useRef, useEffect } from "react";
export const About = ({ onRefUpdate }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (aboutRef.current && typeof onRefUpdate === "function") {
      onRefUpdate(aboutRef);
    }
  }, [onRefUpdate]);

  return (
    <>
      <section ref={aboutRef} className={styles.about}>
        <h1>About</h1>
        <p lang="en">
          Kutay Bekleriç is a highly motivated web developer with a strong focus
          on front-end development. Over the past year, Kutay has dedicated
          himself to mastering the MERN stack. He is a quick learner with
          excellent communication skills developed through his experience as a
          Vice President in a college community. With a Bachelor's in American
          Culture and Literature from Dokuz Eylul University at İzmir, Kutay is
          excited to contribute his technical knowledge and communication skills
          to a dynamic work environment and make a positive impact as a web
          developer.
        </p>
      </section>
    </>
  );
};
