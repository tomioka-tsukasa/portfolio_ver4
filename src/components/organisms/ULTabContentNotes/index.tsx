import { NewtNote } from "@/types/newt"
import styles from "./_index.module.scss"
import TabNote from "@/components/molecules/TabNote"

type Props = {
  notes: Array<NewtNote>
}

export default function ULTabContentNotes({
  notes
}: Props ) {
  return <>
    <div className={styles.root}>
      {notes.map( note => <TabNote note={note} />)}
    </div>
  </>
}
