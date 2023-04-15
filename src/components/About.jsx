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
        <p>
          Kutay Bekleriç is a highly motivated web developer with a strong focus
          on front-end development. Over the past year, Kutay has dedicated
          himself to mastering the MERN stack, building a solid foundation in
          HTML, CSS (SASS), JavaScript, React, Tailwind, MongoDB, Node.js, Git,
          Go and design tools like Figma and Adobe XD. Despite having no prior
          work experience, Kutay's commitment to learning and improving his
          skills is unwavering. He is a quick learner with excellent
          communication skills developed through his experience as a Vice
          President in a college community. With a Bachelor's in American
          Culture and Literature from Dokuz Eylul University at İzmir, Kutay
          brings a unique perspective and an eye for detail to his work. His
          volunteer work at Gençİzmir has provided him with valuable experience
          in marketing, branding, and social media management. Kutay is excited
          to contribute his technical knowledge and communication skills to a
          dynamic work environment and make a positive impact as a web
          developer.
        </p>
      </section>
    </>
  );
};
