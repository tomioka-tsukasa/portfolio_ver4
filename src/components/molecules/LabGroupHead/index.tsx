import { zenOldMincho_w700 } from "@/lib/fonts"
import styles from "./_index.module.scss"
import { NewtLabGroup } from "@/types/newt"
import Image from "next/image"

type Props = {
  group: NewtLabGroup | null,
}

export default function LabGroupHead({
  group,
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.thumbnail}>
        <div className={styles.image}>
          <Image 
            className={styles.image}
            src={group?.thumbnail.src || ''}
            alt=''
            width={group?.thumbnail.width}
            height={group?.thumbnail.height}
          />
        </div>
        <h1 className={`${styles.title} ${zenOldMincho_w700.className}`}>
          {group?.title} 
        </h1>
      </div>
      <p className={styles.body}>
        {group?.body}
      </p>
    </div> 
  </>
}
