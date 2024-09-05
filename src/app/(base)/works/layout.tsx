import { getContentsManagerBySlug } from "@/lib/newt";
import styles from "./_index.module.scss"
import Link from "next/link";

type Props = {
  children: React.ReactNode,
  modal: React.ReactNode,
}

export default async function WorksLayout({
  children,
  modal
}: Props ) {
  const contents = await getContentsManagerBySlug('portfolio-works');
  if (!contents) return
  const works = contents['works-field']
  if (!works) return
  return <>
    <main className={styles.root}>
      {children}
      {works.map( work => (
        work["display-type"] === 'modal' && <Link key={work.slug} href={`./detail/${work.slug}`}>
          {work.title}
        </Link>
      ))}
      {modal}
    </main>
  </>
}
