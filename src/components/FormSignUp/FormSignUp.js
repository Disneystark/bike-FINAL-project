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
  const [clientId, setClientId] = useState("");
  // 1d32a9f0-5413-4859-8ffa-511658c36b78
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTFhMGQ4Y2IzNjZjOTkzNmYzOTg1NiIsImlhdCI6MTY3ODk2NTMzMSwiZXhwIjoxNjc5NTcwMTMxfQ.7ZWtn8sla50-UMZBRtg68xSUssZHShdPFt-e97-Ttnk

  const handleSignUp = () => {
    const body = {
      email,
      password,
      firstName,
      lastName,
      clientId,
    };

    axios
      .post("https://sf-final-project-be.herokuapp.com/api/auth/sign_up", body)

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
      <form>
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
          <label>clientId</label>
          <input
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
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
      </form>
      <button onClick={handleSignUp} className={styles.btn}>
        Регистрация
      </button>
    </div>
  );
};
