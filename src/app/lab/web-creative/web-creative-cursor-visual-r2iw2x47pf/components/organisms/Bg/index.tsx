import styles from "./_index.module.scss"
import Cursor from "@/modules/Cursor"
import CursorBody from "../CursorBody"

export default function Bg() {
  return <>
    <div className={styles.root}>
      <div className={styles.front}></div>
      <div className={styles.cursor}>
        <Cursor body={<CursorBody />} />
      </div>
      <div className={styles.back}></div>
    </div>
  </>
}
