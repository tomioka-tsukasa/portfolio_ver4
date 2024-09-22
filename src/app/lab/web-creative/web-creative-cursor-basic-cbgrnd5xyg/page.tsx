import styles from "./_index.module.scss"
import Cusor from "@/modules/Cursor";
import CursorBody from "./components/molecules/CursorBody";

export default function WebCreativeNavCursor() {
  return <>
    <div className={styles.root}>
      <Cusor body={<CursorBody />} />
      <div style={{
        display: 'flex',
        gap: '40px',
      }}>
        <a href="./" style={{
          display: 'inline-block',
          margin: '100px',
        }}>HELLO</a>
        <a href="./" style={{
          display: 'inline-block',
          margin: '100px',
        }}>HELLO</a>
      </div>
    </div>
  </>
}
