import React, { useState, useRef } from "react";
import Editor from "for-editor";
import styles from "../styles/edit.module.css";

export default function edit() {
  const [value, changVal] = useState("");
  return (
    <div className={styles.edit}>
      <div className={styles.edit_center}>
        <Editor value={value} onChange={changVal} />
      </div>
    </div>
  );
}
