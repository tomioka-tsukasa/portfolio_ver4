import { NewtThumbnail } from "@/types/newt"
import styles from "./_index.module.scss"

type Props = {
  thumbnail: NewtThumbnail
}

export default function ThumbnailIcon({
  thumbnail
}: Props ) {
  return <>
    <div className={styles.root}>
      {thumbnail.value}
    </div>
  </>
}
