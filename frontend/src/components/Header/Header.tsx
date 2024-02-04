import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.content_box}>
        <div className={styles.content_children}>
            <div className={styles.content_item_left_up}>
                ひこうしき
            </div>
            <div className={styles.content_item_left_bottom}>
                非公式
            </div>
        </div>
        <div className={styles.content_item_right}>
            くら寿司
        </div>
    </header>
  )
}

export default Header;