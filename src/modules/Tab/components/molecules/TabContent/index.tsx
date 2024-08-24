import styles from "./_index.module.scss"
import { useStateContext } from "@/modules/Tab/store"
import { ListType } from "@/modules/Tab/types"
import TabList from "../TabList"

interface Props {
  list: ListType
}

export default function TabContent({
  list,
}: Props ) {
  const state = useStateContext()
  return <>
    <div className={styles.root}>
      <TabList list={list} />
      <div className={`${styles.wrapper}`}>
        {list.map( item => (
          <div key={item.id} className={`${styles.content} ${state.active === item.id ? styles.isActive : ''}`}>
            {item.component}
          </div>
        ))}
      </div>
    </div>
  </>
}
