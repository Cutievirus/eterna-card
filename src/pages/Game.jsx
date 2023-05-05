import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../components/Card.jsx';

import styles from './Game.module.css';

/* the main page for the about route of this app */
const Game = function() {
  return (
    <div id={styles.game} className={styles.game}>
      <Card name="Hello World"/>
      <Card name="Vox, Wandering Oddity"/>
    </div>
  );
}

export default Game;