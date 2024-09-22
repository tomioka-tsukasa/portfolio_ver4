import styles from "./_index.module.scss"
import Bg from "./components/organisms/Bg"

export default function WebCreativeCursorVisual() {
  return <>
    <div className={styles.root}>
      <a href="" style={{
        fontSize: '32px',
        lineHeight: '2',
        display: 'inline-block',
      }}>
        CURSORCURSOR<br />
        CURSORCURSOR<br />
        CURSORCURSOR<br />
      </a>
      <Bg />
    </div>
  </>
}
