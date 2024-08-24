import Item from "@/modules/Tab/components/atoms/Item"
import styles from "./_index.module.scss"
import { ListType } from "@/modules/Tab/types"

interface Props {
  list: ListType
}

export default function TabList({
  list,
}: Props ) {
  return <>
    <ul className={`${styles.root}`}>
      {list.map( item => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  </>
}
