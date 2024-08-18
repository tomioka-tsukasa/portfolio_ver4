import { NewtArticle } from "@/types/newt";
import Link from "next/link";
import Arrow from "@/components/atoms/Arrow/";
import styles from "./_index.module.scss";
import { zenKakuGothicNew_w700 } from "@/lib/fonts";
import Categorys from "@/components/molecules/Categorys/";
import UpdateDate from "@/components/molecules/UpdateDate";
import ThumbnailIcon from "@/components/atoms/ThumbnailIcon";

export default function ArticleItem({
  article,
  rootPath = '/blog/'
}: {
  article: NewtArticle,
  rootPath?: string
}) {
  return <>
    <li key={article.slug} className={styles.root}>
      <Link href={`${rootPath}${article.slug}`} className={styles.inner}>
        <div className={styles.thumbnail}>
          <ThumbnailIcon thumbnail={article.thumbnail} />
        </div>
        <p className={`${styles.title} ${zenKakuGothicNew_w700.className}`}>
          {article.title}
        </p>
        <div className={styles.info}>
          <div className={styles.date}>
            <UpdateDate updateTime={article._sys.raw.updatedAt} />
          </div>
          <div className={styles.categorys}>
            <Categorys categorys={article.categorys} />
          </div>
        </div>
        <div className={styles.arrow}>
          <Arrow fill={'white'} />
        </div>
      </Link>
    </li>
  </>
}