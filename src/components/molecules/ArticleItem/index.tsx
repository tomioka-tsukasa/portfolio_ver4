import { NewtArticle } from "@/types/newt";
import Link from "next/link";
import Arrow from "@/components/atoms/Arrow/";
import styles from "./_index.module.scss";
import { zenKakuGothicNew_w700 } from "@/lib/fonts";
import Categorys from "@/components/molecules/Categorys/";
import UpdateDate from "@/components/molecules/UpdateDate";

export default function ArticleItem({
  article
}: {
  article: NewtArticle
}) {
  return <>
    <li key={article.slug} className={styles.root}>
      <Link href={article.slug} className={styles.inner}>
        <div className={styles.thumbnail}>
          {article.thumbnail?.value}
        </div>
        <div className={styles.content}>
          <p className={`${styles.title} ${zenKakuGothicNew_w700.className}`}>
            {article.title}
          </p>
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
