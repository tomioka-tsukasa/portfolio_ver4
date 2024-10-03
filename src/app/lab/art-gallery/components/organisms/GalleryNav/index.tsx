import ProgressArrow from "../../atoms/ProgressArrow"
import styles from "./_index.module.scss"

type Props = {
}

export default function GalleryNav({
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.buttons}>
        <button>
          <ProgressArrow />
        </button>
        <button>
          <ProgressArrow />
        </button>
      </div>
    </div>
  </>
}
