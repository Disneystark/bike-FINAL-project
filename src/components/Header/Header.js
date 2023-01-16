import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_context}>
        <div>
          <button className={styles.button_header_1}>Register</button>
          <button className={styles.button_header_2}>Login</button>
        </div>
        <div className={styles.rental}>Bicycle rental</div>
      </div>
    </div>
  );
};

export default Header;
