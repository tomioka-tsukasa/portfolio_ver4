import { useChangeContext, useStateContext } from "@/modules/Tab/store"
import styles from "./_index.module.scss"
import { ItemType } from "@/modules/Tab/types"

interface Props {
  item: ItemType,
}
  
export default function TabItem({
  item,
}: Props ) {
  const state = useStateContext()
  const setActive = useChangeContext()
  const clickHandler = () => {
    setActive({
      active: item.id
    })
  }
  return <>
    <button className={`${styles.root} ${state.active === item.id ? styles.isActive : ''}`} onClick={clickHandler}>
      {item.name}
    </button>
  </>
}
