import styles from "../css/Hero.module.css";
import twitter from "../../public/assets/twitter.png";
import email from "../../public/assets/email.png";
import linkedin from "../../public/assets/linkedin.png";
import App from "../App.jsx";

export const Hero = ({ aboutRef }) => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: aboutRef.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.about}>
          <h1>Kutay</h1>
          <h1>Bekleriç,</h1>
          <p className={styles["about-info"]}>
            Turkey based Full-stack Developer, focuses on fluid & responsive
            Front-end development.
          </p>
          <button onClick={scrollToAbout}>Learn More</button>
        </div>
        <div className={styles.contact}>
          <div className={styles.icons}>
            <div>
              <a href="mailto:kutaybekleric@gmail.com">
                <img src={email} alt="" /> <span>E-mail</span>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/kutaybekleric">
                <img src={twitter} alt="" /> <span>Twitter</span>
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/kutaybekleriç/">
                <img src={linkedin} alt="" /> <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
