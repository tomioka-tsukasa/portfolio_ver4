import Heading from "@/components/atoms/Heading"
import CategoryLinks from "@/components/molecules/CategoryLinks"
import PickupArticles from "@/components/molecules/PickupArticles"
import { getArticles } from "@/lib/newt"
import styles from "./_index.module.scss"

export default async function BlogSidebar() {
  const articles = await getArticles()
  return <>
    <div className={styles.root}>
      <div className={styles.pickup}>
        <Heading type={'border'} tag={'h3'} size={'small'}>
          Pickup Contents.
        </Heading>
        <PickupArticles articles={articles} type='inline' />
      </div>
      <div className={styles.categorys}>
        <Heading type={'border'} tag={'h3'} size={'small'}>
          Categorys.
        </Heading>
        <CategoryLinks rootPath={'/blog/blog-category/'} />
      </div>
    </div>
  </>
}
