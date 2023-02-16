import React, { useState } from "react";
import styles from "./Header.module.css";
import { FormSignUp } from "../FormSignUp/FormSignUp";
import { FormSignIn } from "../FormSignIn/FormSignIn";
import { FormTheft } from "../FormTheft/FormTheft";

const MENU_TYPE_SIGNUP = 0;
const MENU_TYPE_SIGNIN = 1;
const MENU_TYPE_THEFTFORM = 2;

const Header = () => {
  const [openMenuType, setOpenMenuType] = useState(null);

  const handleMenuOpen = (nextMenuType) => {
    if (nextMenuType === openMenuType) {
      setOpenMenuType(null);
    } else {
      setOpenMenuType(nextMenuType);
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_context}>
        <div>
          <button
            onClick={() => handleMenuOpen(MENU_TYPE_SIGNUP)}
            className={styles.button_header_1}
          >
            Регистрация
          </button>
          <button
            onClick={() => handleMenuOpen(MENU_TYPE_SIGNIN)}
            className={styles.button_header_2}
          >
            Вход
          </button>
          <button
            onClick={() => handleMenuOpen(MENU_TYPE_THEFTFORM)}
            className={styles.button_theft}
          >
            Сообщить о краже
          </button>

          {openMenuType === MENU_TYPE_THEFTFORM && <FormTheft />}
          {openMenuType === MENU_TYPE_SIGNUP && <FormSignUp />}
          {openMenuType === MENU_TYPE_SIGNIN && <FormSignIn />}
        </div>
        <div className={styles.rental}>Bicycle rental</div>
      </div>
    </div>
  );
};

export default Header;
