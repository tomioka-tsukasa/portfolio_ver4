import styles from "./_index.module.scss"
import Image, { StaticImageData } from "next/image"

type Props = {
  image: StaticImageData
}

export default function ClipItem({
  image
}: Props ) {
  return <>
    <div className={`${styles.root}`}>
      <div className={styles.content}>
        <Image
          src={image}
          alt=''
          width={image.width}
          height={image.height}
        />
      </div>
    </div>
  </>
}
