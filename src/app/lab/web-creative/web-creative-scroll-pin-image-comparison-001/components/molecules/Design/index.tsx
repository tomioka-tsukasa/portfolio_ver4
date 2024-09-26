import styles from "./_index.module.scss"
import { zenOldMincho_w400 } from "@/lib/fonts"

export default function Design() {
  return <>
    <div className={`${styles.content}`}>
      <p className={`${styles.paragraph}`}>
        このスタイルは、強烈なレッドを基調とした大胆なファッションでありながら、クラシックなエレガンスを失わない洗練されたコーディネートです。<br />
        <br />
        主役となる鮮やかなレッドのセットアップは、女性らしい強さと自信を表現。ゆったりとしたシルエットのジャケットとパンツは、動きやすさを持たせつつ、シャープなラインを作り出し、視覚的なインパクトを与えます。
      </p>
    </div>
    <div className={`${styles.copy} ${zenOldMincho_w400.className}`}>
      LINEUP LINEUP LINEUP LINEUP
    </div>
  </>
}
