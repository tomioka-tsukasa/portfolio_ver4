import styles from "./_index.module.scss";

export default function TerminalCtrlIcons() {
  return <>
    <div className={styles.root}>
      <span className={`${styles.icon} ${styles.red}`}></span>
      <span className={`${styles.icon} ${styles.yellow}`}></span>
      <span className={`${styles.icon} ${styles.green}`}></span>
    </div>
  </>
}
