import styles from "../styles/advert.module.css";
import React, { useState } from "react";

const Advert = () => {
  const [advertList] = useState(["友情链接博客", '加油加油加油']);

  return (
    <>
      {advertList.map((item,index) => {
        return <div className={styles.advert} key={index}>{item}</div>;
      })}
      <div className={styles.pay}>赏</div>
    </>
  );
};

export default Advert;
