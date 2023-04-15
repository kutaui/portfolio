import styles from "../css/ProjectCard.module.css";
import github from "../../public/github-mark-white.png";
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
          <a href={props.github}>
            <button>
              <span>
                <img src={github} alt="" />
                Github
              </span>
            </button>
          </a>
        </div>
      </div>
      <hr />
    </>
  );
};
