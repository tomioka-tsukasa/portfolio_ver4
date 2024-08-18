import Heading from "@/components/atoms/Heading"
import CategoryLinks from "@/components/molecules/CategoryLinks"
import PickupArticles from "@/components/molecules/PickupArticles"
import styles from "./_index.module.scss"

export default function BlogSidebar() {
  return <>
    <div className={styles.root}>
      <div className={styles.pickup}>
        <Heading type={'border'} tag={'h3'} size={'small'}>
          Pickup Contents.
        </Heading>
        <PickupArticles rootPath={'/blog/'}/>
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
