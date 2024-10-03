import NamePlate from "../../atoms/NamePlate"
import styles from "./_index.module.scss"
import Image from "next/image"

type Props = {
  artModel: Cms.ArtModel
}

export default function ArtModel({
  artModel
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.image}>
        <Image
          src={artModel.visual.src}
          alt={artModel.visual.altText}
          width={artModel.visual.width}
          height={artModel.visual.height}
          priority
        />
      </div>
      <div className={styles.plate}>
        <NamePlate title={artModel.title} author={artModel.author} />
      </div>
    </div>
  </>
}
