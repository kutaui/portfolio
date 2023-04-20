import styles from "../css/Header.module.css";

export const Header = () => {
  return (
    <>
      <header>
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
                href="drive.google.com/file/d/1QH9enUHYnRRmsjE3ZuPkK_eU80bTOage"
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
          <div className={styles.greenbox}></div>
        </nav>
      </header>
    </>
  );
};
