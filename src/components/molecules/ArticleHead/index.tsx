import styles from "./_index.module.scss"
import Categorys from "../Categorys"
import UpdateDate from "../UpdateDate"
import { zenKakuGothicNew_w700 } from "@/lib/fonts"
import EmojiIcon from "@/components/atoms/EmojiIcon"

type Props = {
  article: Newt.Article
}

export default function ArticleHead({
  article
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.thumbnail}>
        <EmojiIcon emoji={article.thumbnail} />
      </div>
      <h1 className={`${styles.head} ${zenKakuGothicNew_w700}`}>
        {article.title}
      </h1>
      <div className={styles.info}>
        <div className={styles.categorys}> 
          <UpdateDate updateTime={article._sys.raw.updatedAt} />
        </div>
        <div className={styles.categorys}> 
          <Categorys categorys={article.categorys} />
        </div>
      </div>
    </div>
  </>
}
