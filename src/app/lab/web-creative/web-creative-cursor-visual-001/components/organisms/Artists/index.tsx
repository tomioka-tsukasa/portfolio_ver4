import styles from "./_index.module.scss"
import ArtistList from "../../molecules/ArtistList"
import { zenKakuGothicNew_w400 } from "@/lib/fonts"

export default function Artists() {
  return <>
    <div className={`${styles.root}`}> 
      <div className={`${styles.content}`}> 
        <h2 className={`${styles.title} ${zenKakuGothicNew_w400.className}`}> 
          The Member
        </h2>
        <p className={`${styles.description} ${styles.en} ${zenKakuGothicNew_w400.className}`}> 
          The music show run by MusicWave Inc.<br />
          features commentators with exceptional<br />
          technical expertise and careers. With years<br />
          of experience, they bring deep knowledge<br />
          and sharp analysis to the forefront of<br />
          the music industry.
        </p>
        <p className={`${styles.description} ${styles.jp} ${zenKakuGothicNew_w400.className}`}> 
          ミュージックウェーブ社が運営する音楽番組では、<br />
          技術とキャリアに優れたコメンテイターが活躍しています。<br />
          彼らは長年の経験を持ち、音楽業界の最前線で<br />
          深い知識と分析力を発揮しています。
        </p>
      </div>
      <div className={`${styles.list}`}> 
        <ArtistList />
      </div>
    </div>
  </>
}
