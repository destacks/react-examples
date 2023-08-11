import React, { useState } from "react";
import styles from '@/styles/Tic-tac-toe.module.css'

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button 
    className={styles.square}
    onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}