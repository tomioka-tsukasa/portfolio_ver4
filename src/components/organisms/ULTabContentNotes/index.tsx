import { NewtNote } from "@/types/newt"
import styles from "./_index.module.scss"
import TabNote from "@/components/molecules/TabNote"

type Props = {
  notes: Array<NewtNote> | null
}

export default function ULTabContentNotes({
  notes
}: Props ) {
  return <>
    <div className={styles.root}>
      {notes?.map( note => <TabNote key={note.slug} note={note} />)}
    </div>
  </>
}
