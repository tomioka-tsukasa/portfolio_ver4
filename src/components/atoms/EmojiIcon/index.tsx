import styles from "./_index.module.scss"

type Props = {
  emoji: Newt.Emoji
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
