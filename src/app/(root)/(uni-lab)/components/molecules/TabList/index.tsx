import TabTrigger from "@/modules/Tab/components/TabTrigger"
import styles from "./_index.module.scss"
import { TabMember } from "@/modules/Tab/types"
import TabItem from "@/app/(root)/(uni-lab)/components/atoms/TabItem"

interface Props {
  list: Array<TabMember>
}

export default function TabList({
  list,
}: Props ) {
  return <>
    <ul className={`${styles.root}`}>
      {list.map( member => (
        <li key={member.id}>
          <TabTrigger member={member}>
            <TabItem name={member.name} />
          </TabTrigger>
        </li>
      ))}
    </ul>
  </>
}
