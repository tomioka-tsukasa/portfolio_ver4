import { NewtEmoji } from "@/types/newt"
import styles from "./_index.module.scss"

type Props = {
  emoji: NewtEmoji
}

export default function EmojiIcon({
  emoji
}: Props ) {
  return <>
    <div className={styles.root}>
      {emoji.value}
    </div>
  </>
}
