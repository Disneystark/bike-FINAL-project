import React, { useState } from "react";
import styles from "./FormTheft.module.css";
import axios from "axios";

export const FormTheft = () => {
  const [licenseNumber, setlicenseNumber] = useState("");
  const [typebicycle, setTypeBicycle] = useState("");
  const [ownerFullName, setownerFullName] = useState("");
  const [bicycleColor, setBicycleColor] = useState("");

  const bodyTheft = {
    licenseNumber,
    typebicycle,
    ownerFullName,
    bicycleColor,
  };
  axios
    .post("https://sf-final-project-be.herokuapp.com/api/cases/", {
      method: "POST",
      body: JSON.stringify(bodyTheft),
      redirect: "follow",
    })
    .then((response) => response.text())
    .then((result) => console.log(result));
  // .catch((error) => console.log("error", error));
  return (
    <div className={styles.box}>
      <div className={styles.input_container}>
        <label>Номер лицензии</label>
        <input placeholder="обязательное поле" type="text" />
      </div>
      <div className={styles.input_container}>
        <label>Фамилия Имя</label>
        <input placeholder="обязательное поле" type="text" />
      </div>
      <div className={styles.input_container}>
        <label>Тип велосипеда</label>
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
      <button onClick={FormTheft} className={styles.btn}>
        Отправить
      </button>
    </div>
  );
};
