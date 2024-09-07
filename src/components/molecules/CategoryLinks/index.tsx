import { getCategorys } from "@/lib/newt"
import styles from "./_index.module.scss"
import Navigation from "@/modules/Navigation"

type Props = {
  rootPath: string
}

export default async function CategoryLinks({
  rootPath
}: Props) {
  const categorys = await getCategorys()
  return <>
    <ul className={styles.root}>
      {categorys.map( category => <li key={category.slug} className={styles.item}>
        <Navigation typing={false} href={`${rootPath}${category.slug}`}>
          {category.name}
        </Navigation>
      </li>)}
    </ul>
  </>
}
