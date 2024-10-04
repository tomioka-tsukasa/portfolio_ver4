import { ArtSampleModels } from "../../../data/art-sample-models"
import ArtModel from "../../molecules/ArtModel"
import styles from "./_index.module.scss"

type Props = {
}

export default function DisplayGallery({
}: Props ) {
  return <>
    <div className={`${styles.root}`} id='scroll-container'>
      <div className={`${styles.content}`}>
        {ArtSampleModels.map( artModel => <div 
          key={artModel.slug}
          className={styles.artModel}
        >
          <ArtModel artModel={artModel} />
        </div>)}
      </div>
    </div>
  </>
}
