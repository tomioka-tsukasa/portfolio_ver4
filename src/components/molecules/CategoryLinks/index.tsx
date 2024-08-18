import { getCategorys } from "@/lib/newt"
import Link from "next/link"
import styles from "./_index.module.scss"

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
        <Link href={`${rootPath}${category.slug}`}>
          {category.name}
        </Link>
      </li>)}
    </ul>
  </>
}
