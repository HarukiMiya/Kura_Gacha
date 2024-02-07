import styles from './YenGacha.module.css'
import { useContext } from 'react';
import { SettingContext } from '../../store/setting-context';

const YenGatcha = () => {
  const { desiredPrice } = useContext(SettingContext);

  return (
    <div className={styles.content}>
        <div className={styles.yen}>{desiredPrice}</div>
        <div className={styles.gacha}>円ガチャ</div>
    </div>
  )
}

export default YenGatcha;