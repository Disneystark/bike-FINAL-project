import React, { useState } from "react";
import styles from "./FormTheft.module.css";
import axios from "axios";

export const FormTheft = () => {
  const [licenseNumber, setlicenseNumber] = useState("");
  const [typebicycle, setTypeBicycle] = useState("");
  const [ownerFullName, setownerFullName] = useState("");
  const [bicycleColor, setBicycleColor] = useState("");
  const [dateofheft, setDateOfHeft] = useState("");
  const HandleTheft = () => {
    const bodyTheft = {
      licenseNumber,
      typebicycle,
      ownerFullName,
      bicycleColor,
      dateofheft,
    };

    axios
      .post("https://sf-final-project-be.herokuapp.com/api/cases/", {
        body: JSON.stringify(bodyTheft),
        redirect: "follow",
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={styles.box}>
      <div className={styles.input_container}>
        <label>Номер лицензии</label>
        <input
          onChange={(e) => setlicenseNumber(e.target.value)}
          placeholder="обязательное поле"
          type="text"
        />
      </div>
      <div className={styles.input_container}>
        <label>Фамилия Имя</label>
        <input
          onChange={(e) => setownerFullName(e.target.value)}
          placeholder="обязательное поле"
          type="text"
        />
      </div>
      <div className={styles.input_container}>
        <label>Тип велосипеда</label>
        <input
          onChange={(e) => setTypeBicycle(e.target.value)}
          placeholder="обязательное поле"
          type="text"
        />
      </div>
      <div className={styles.input_container}>
        <label>Цвет велосипеда</label>
        <input onChange={(e) => setBicycleColor(e.target.value)} type="text" />
      </div>
      <div className={styles.input_container}>
        <label>Дата кражи</label>
        <input onChange={(e) => setDateOfHeft(e.target.value)} type="text" />
      </div>
      <button onClick={HandleTheft} className={styles.btn}>
        Отправить
      </button>
    </div>
  );
};
