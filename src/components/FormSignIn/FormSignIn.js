import axios from "axios";
import React, { useState } from "react";
import styles from "./FormSignIn.module.css";

export const FormSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    const bodySignIn = {
      email,
      password,
    };

    localStorage.setItem(
      "access_token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTFhMGQ4Y2IzNjZjOTkzNmYzOTg1NiIsImlhdCI6MTY3ODk2NTMzMSwiZXhwIjoxNjc5NTcwMTMxfQ.7ZWtn8sla50-UMZBRtg68xSUssZHShdPFt-e97-Ttnk"
    );
    localStorage.getItem("access_token");
    axios
      .post(
        "https://sf-final-project-be.herokuapp.com/api/auth/sign_in",
        bodySignIn
      )

      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={styles.box}>
      <div className={styles.input_container}>
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.input_container}>
        <label>Пароль</label>
        <input onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={handleSignIn} className={styles.btn}>
        Войти
      </button>
    </div>
  );
};
