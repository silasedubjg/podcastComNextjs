import Header from '../components/Header'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import Player from '../components/Player'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header></Header>
        <Component {...pageProps}></Component>
      </main>
      <Player></Player>

    </div>
  )
}

export default MyApp
