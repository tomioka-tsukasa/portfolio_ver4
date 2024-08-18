import UpdateIcon from "@/components/atoms/UpdateIcon"
import styles from "./_index.module.scss"
import Time from "@/components/atoms/Time"

export default function ArticleItem({
  updateTime
}: {
  updateTime: string
}) {
  return <>
    <div className={styles.root}>
      <div className={styles.icon}>
        <UpdateIcon />
      </div>
      <span className={styles.text}>
        <Time timezone={updateTime} />
      </span>
    </div>
  </>
}