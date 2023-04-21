import styles from "../css/ProjectCard.module.css";
import github from "/github-mark-white.png";
import web from "/web.png";
export const ProjectCard = (props) => {
  return (
    <>
      <div className={styles.container}>
        <img src={props.image} alt="" />
        <div className={styles.info}>
          <h1>{props.title}</h1>
          <p className={styles.desc}>{props.description}</p>
          <p className={styles.stack}>
            <span>Stack:</span> {props.stack}
          </p>
          <div className={styles.buttons}>
            <a href={props.github}>
              <img src={github} alt="github icon" />
              <span> Github</span>
            </a>
            <a href={props.live}>
              <img
                className={styles.liveicon}
                src={web}
                alt="live website icon"
              />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
