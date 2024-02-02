import styles from './YenGacha.module.css'

const YenGatcha = () => {
  return (
    <div className={styles.content}>
        <div className={styles.yen}>1000</div>
        <div className={styles.gacha}>円ガチャ</div>
    </div>
  )
}

export default YenGatcha;