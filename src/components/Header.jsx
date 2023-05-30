import styles from "../css/Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <img src="/logo.png" alt="" />
          <ul className={styles.navigation}>
            <li>
              <a
                className={styles["nav-links"]}
                href="https://blog.kutaybekleric.com"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className={styles["nav-links"]}
                href="https://drive.google.com/file/d/1_H10fFKGs9R9kS8w3uFowCYd7o-zEsaw"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className={styles["nav-links"]}
                href="https://github.com/kutaui"
              >
                Github
              </a>
            </li>
            <li className={styles.right}>Contact</li>
          </ul>
          <div className={styles.menuToggle}>
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul className={styles.menu}>
              <a href="https://blog.kutaybekleric.com">
                <li>Blog</li>
              </a>
              <a href="https://drive.google.com/file/d/1QH9enUHYnRRmsjE3ZuPkK_eU80bTOage">
                <li>Resume</li>
              </a>
              <a href="https://github.com/kutaui">
                <li>Github</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div className={styles.greenbox}></div>
        </nav>
      </header>
    </>
  );
};
