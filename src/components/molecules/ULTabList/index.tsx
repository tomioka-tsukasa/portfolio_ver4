import TabTrigger from "@/modules/Tab/components/TabTrigger"
import styles from "./_index.module.scss"
import { TabMember } from "@/modules/Tab/types"
import ULTabItem from "@/components/atoms/ULTabItem"

interface Props {
  list: Array<TabMember>
}

export default function ULTabList({
  list,
}: Props ) {
  return <>
    <ul className={`${styles.root}`}>
      {list.map( member => (
        <li key={member.id}>
          <TabTrigger member={member}>
            <ULTabItem name={member.name} />
          </TabTrigger>
        </li>
      ))}
    </ul>
  </>
}
