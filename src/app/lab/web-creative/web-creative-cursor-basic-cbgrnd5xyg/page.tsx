import styles from "./_index.module.scss"
import Cursor from "@/modules/Cursor";
import CursorBody from "./components/molecules/CursorBody";
import CardList from "./components/organisms/CardList";

export default function WebCreativeCursorBasic() {
  return <>
    <div className={styles.root}>
      <Cursor body={<CursorBody />} />
      <CardList />
      <div className={styles.bg}></div>
    </div>
  </>
}
