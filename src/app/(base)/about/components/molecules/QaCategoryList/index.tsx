import { TabTrigger } from "@/modules/Tab/components/TabTrigger"
import styles from "./_index.module.scss"
import { TabMember } from "@/modules/Tab/types"

interface Props {
  list: Array<TabMember>
}

export default function QaCategoryList({
  list,
}: Props ) {
  return <>
    <ul className={`${styles.root}`}>
      {list.map( member => (
        <li key={member.id}>
          <TabTrigger member={member}>
            {member.trigger}
          </TabTrigger>
        </li>
      ))}
    </ul>
  </>
}
