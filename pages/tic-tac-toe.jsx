import React, { useState } from "react";
import styles from '@/styles/Tic-tac-toe.module.css'

export default function Square() {
  return <button className={styles.square}>X</button>;
}