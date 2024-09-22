import styles from "./_index.module.scss"
import Cusor from "@/modules/Cursor";
import CursorBody from "./components/molecules/CursorBody";
import CardList from "./components/organisms/CardList";

export default function WebCreativeNavCursor() {
  return <>
    <div className={styles.root}>
      <Cusor body={<CursorBody />} />
      <CardList />
      <div className={styles.bg}></div>
    </div>
  </>
}
