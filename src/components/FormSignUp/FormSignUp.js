import React, { useState } from "react";
import styles from "./FormSignUp.module.css";
import axios from "axios";
const ERROR_STATUS = "ERR";

export const FormSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    const body = {
      email,
      password,
      firstName,
      lastName,
      clientId: "27afcae6-a218-11ed-a8fc-0242ac120002",
    };

    axios
      .post("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", {
        method: "POST",
        body: JSON.stringify(body),
        redirect: "follow",
      })
      .then((response) => response.json())
      .then((result) => {
        if (result.status === ERROR_STATUS) {
          setError(result.message);
        } else {
        }
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={styles.box}>
      <div className={styles.input_container}>
        <label>Имя</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
        />
      </div>
      <div className={styles.input_container}>
        <label>Фамилия</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
        />
      </div>
      <div className={styles.input_container}>
        <label>Пароль</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        />
      </div>
      <div className={styles.input_container}>
        <label>E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="mail"
        />
      </div>
      {error != null && <div>{error}</div>}
      <button onClick={handleSignUp} className={styles.btn}>
        Регистрация
      </button>
    </div>
  );
};
