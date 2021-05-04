
import styles from './styles.module.scss';

export default function Player() {


  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="./playing.svg" alt="tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione para ouvir</strong>
      </div>

      <footer></footer>
    </div>
  );
}