import { ProjectCard } from "./ProjectCard.jsx";
import styles from "../css/Projects.module.css";
import countries from "/countries.jpg";
import thesociety from "/landing_page.png";
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
        <ProjectCard
          image={thesociety}
          title="TheSociety"
          github="https://github.com/kutaui/Ecommerce-fullstack"
          live="https://thesociety.kutaybekleric.com"
          description="A Fullstack e-commerce app. Tried to make it functional as possible, wanted it to work just like industry leading websites."
          stack="Next.js, Context, Tailwind, Prisma, PostgreSQL, Typescript"
        />
      </main>
    </>
  );
};
