import styles from "./_index.module.scss"
import TabNote from "@/components/molecules/TabNote"

type Props = {
  notes: Array<Newt.Note> | null
}

export default function TabContentNotes({
  notes
}: Props ) {
  return <>
    <div className={styles.root}>
      {notes?.map( note => <TabNote key={note.slug} note={note} />)}
    </div>
  </>
}
