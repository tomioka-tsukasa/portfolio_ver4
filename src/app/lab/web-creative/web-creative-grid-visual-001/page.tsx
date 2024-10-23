import styles from "./_index.module.scss"
import UiGrid from "./components/ui/Grid"

export default function WebCreativeGridVisual() {
  return <>
    <div className={styles.root}>
      <div className={styles.dummy}>
        <Dummy /><Dummy /><Dummy />
      </div>
      <div className={styles.gridBg}>
        <UiGrid />
      </div>
    </div>
  </>
}

function Dummy() {
  return <>
    Dummy Content.<br />Dummy Content.<br />Dummy Content.<br />Dummy Content.<br />Dummy Content.<br />
  </>
}
