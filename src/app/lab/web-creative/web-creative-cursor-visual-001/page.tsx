import styles from "./_index.module.scss"
import Artists from "./components/organisms/Artists"
import Bg from "./components/organisms/Bg"
import Provider from "./store"

export default function WebCreativeCursorVisual() {
  return <>
    <div className={styles.root}>
      <Provider initialState={{
        active: ' '
      }}>
        <Artists />
        <Bg />
      </Provider>
    </div>
  </>
}
