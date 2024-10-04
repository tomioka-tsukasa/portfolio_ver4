import { useEffect } from "react"
import { ArtSampleModels } from "../../../data/art-sample-models"
import ArtModel from "../../molecules/ArtModel"
import styles from "./_index.module.scss"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

type Props = {
}

export default function DisplayGallery({
}: Props ) {
  useEffect(() => {
  }, [])
  return <>
    <div className={`${styles.root}`} id='scroll-container'>
      <div className={`${styles.content}`} id='scroll-content'>
        {ArtSampleModels.map( artModel => <div 
          id={artModel.slug}
          key={artModel.slug}
          className={styles.artModel}
        >
          <ArtModel artModel={artModel} />
        </div>)}
      </div>
    </div>
  </>
}
