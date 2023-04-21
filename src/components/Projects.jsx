import { ProjectCard } from "./ProjectCard.jsx";
import styles from "../css/Projects.module.css";
import countries from "../../public/countries.jpg";
export const Projects = () => {
  return (
    <>
      <main>
        <h1 className={styles["section-title"]}>Projects</h1>
        <ProjectCard
          image={countries}
          title="Countries"
          github="https://github.com/kutaui/countries-info"
          live="https://react-countries.onrender.com"
          description="A web app that shows information about countries. It uses the REST Countries API to get the data. Mobile Responsive and functioning filter and search."
          stack="React, Redux, Router, SCSS"
        />
      </main>
    </>
  );
};
