import React from "react";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>
          <span>Прокат на</span>
          <div className={styles.message}>
            <div className={styles.word1}>Bicycle </div>
            <div className={styles.word2}>rental</div>
          </div>
        </h1>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.imgBx}>
              <div className={styles.bike_icon_1}></div>
            </div>
            <div className={styles.content}>
              <div>
                <h2>Трехколесные велосипеды</h2>
                <p>Двухместный,разных цветов для детского возраста.</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.imgBx}>
              <div className={styles.bike_icon_2}></div>
            </div>
            <div className={styles.content}>
              <div>
                <h2>Электрические велосипеды</h2>
                <p>
                  Погрузитесть в будущее с помощью электрического велосипеда.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.imgBx}>
              <div className={styles.bike_icon_3}></div>
            </div>
            <div className={styles.content}>
              <div>
                <h2>Горный велосипед</h2>
                <p>Любых видов. Для всех возрастов.</p>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.imgBx}>
              <div className={styles.bike_icon_4}></div>
            </div>
            <div className={styles.content}>
              <div>
                <h2>Детский велосипед</h2>
                <p>От 3-6 лет,трехколесные.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
