import { getLabSubjects } from "@/lib/newt"
import styles from "./_index.module.scss"
import CardItem from "../../molecules/CardItem"

export default async function CardList() {
  const subjects = await getLabSubjects()
  if (!subjects) return 
  return <>
    <nav className={styles.root}>
      <ul className={styles.list}>
        {subjects.map( subject => <li 
          key={subject.slug} 
          className={styles.item}
          data-mod-cursor-item="hover"
        >
          <CardItem subject={subject} />
        </li>)}
      </ul>
    </nav>
  </>
}
