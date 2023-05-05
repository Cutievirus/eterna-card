import React from 'react';
import root from 'react-shadow';
import styles from './Card.module.css';

const Card = function({ name }){
  return (
    <root.div className={["card",styles.card].join(' ')}>
      {name}
      <div className={styles.portrait}></div>
    </root.div>
  );
}

export default Card;