import React, { useState } from "react";
import styles from '@/styles/Tic-tac-toe.module.css'

export default function Board() {
  return (
    <>
      <div className={styles.boardRow}>
        <button className={styles.square}>X</button>
        <button className={styles.square}>X</button>
        <button className={styles.square}>X</button>
      </div>
      <div className={styles.boardRow}>
        <button className={styles.square}>X</button>
        <button className={styles.square}>X</button>
        <button className={styles.square}>X</button>
      </div>
      <div className={styles.boardRow}>
        <button className={styles.square}>X</button>
        <button className={styles.square}>X</button>
        <button className={styles.square}>X</button>
      </div>
    </>
  )
}