import ArticleList from "@/components/organisms/ArticleList"
import BlogTemplate from "@/components/templates/BlogTemplate"
import { getArticles } from "@/lib/newt"
import PickupArticles from "@/components/molecules/PickupArticles"
import Heading from "@/components/atoms/Heading"
import styles from "./_index.module.scss"
import BlogSidebar from "@/components/organisms/BlogSidebar"

export default async function Blog() {
  const articles = await getArticles()
  return <>
    <BlogTemplate nav={<BlogSidebar />}>
      <div className={styles.main}>
        <div className={styles.pickup}>
          <Heading type="border">
            Pickup Contents.
          </Heading>
          <PickupArticles articles={articles} />
        </div>
        <div className={styles.contents}>
          <Heading type="border">
            All Contents.
          </Heading>
          <ArticleList articles={articles} rootPath="/blog/" />
        </div>
      </div>
    </BlogTemplate>
  </>
}
