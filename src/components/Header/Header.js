import React, { useState } from "react";
import styles from "./Header.module.css";
import { FormSignUp } from "../FormSignUp/FormSignUp";

const MENU_TYPE_SIGNUP = 0;
const MENU_TYPE_SIGNIN = 1;
const MENU_TYPE_THEFTFORM = 2;

const Header = () => {
  const [openMenuType, setOpenMenuType] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  var raw = JSON.stringify({
    email: "user@skillfactory.ru",
    password: "12345",
  });
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

          {openMenuType === MENU_TYPE_THEFTFORM && (
            <div className={styles.box}>
              <form>
                <div className={styles.input_container}>
                  <label>Номер лицензии</label>
                  <input placeholder="обязательное поле" type="text" />
                </div>
                <div className={styles.input_container}>
                  <label>Имя</label>
                  <input placeholder="обязательное поле" type="text" />
                </div>
                <div className={styles.input_container}>
                  <label>Фамилия</label>
                  <input placeholder="обязательное поле" type="text" />
                </div>
                <div className={styles.input_container}>
                  <label>Отчество</label>
                  <input placeholder="обязательное поле" type="text" />
                </div>
                <div className={styles.input_container}>
                  <label>Цвет велосипеда</label>
                  <input type="text" />
                </div>
                <div className={styles.input_container}>
                  <label>Дата кражи</label>
                  <input type="text" />
                </div>
                <div className={styles.input_container}>
                  <label>Дополнительная информация</label>
                  <input type="text" />
                </div>
                <button className={styles.btn}>Отправить</button>
              </form>
            </div>
          )}

          {openMenuType === MENU_TYPE_SIGNUP && <FormSignUp />}
          {openMenuType === MENU_TYPE_SIGNIN && (
            <div className={styles.box}>
              <form>
                <div className={styles.input_container}>
                  <label>Email</label>
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="Email"
                  />
                </div>
                <div className={styles.input_container}>
                  <label>Пароль</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                  />
                </div>
                <button
                  onClick={() => {
                    console.log(inputValue);

                    var requestOptions = {
                      method: "POST",
                      body: raw,
                      redirect: "follow",
                    };

                    fetch(
                      "https://sf-final-project-be.herokuapp.com/api/auth/sign_up",
                      requestOptions
                    )
                      .then((response) => response.text())
                      .then((result) => console.log(result))
                      .catch((error) => console.log("error", error));
                  }}
                  className={styles.btn}
                >
                  Войти
                </button>
              </form>
            </div>
          )}
        </div>
        <div className={styles.rental}>Bicycle rental</div>
      </div>
    </div>
  );
};

export default Header;
