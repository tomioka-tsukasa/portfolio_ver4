import styles from "./_index.module.scss"
import { getContentsManagerBySlug } from "@/lib/newt";
import WorkUniqueCard from "./components/organisms/WorkUniqueCard";
import Link from "next/link";

type Props = {
  children: React.ReactNode
}

export default async function WorksLayout({
  children
}: Props ) {
  const contents = await getContentsManagerBySlug('portfolio-works');
  if (!contents) return
  const works = contents['works-field']
  if (!works) return
  return <>
    <main className={styles.root}>
      <div className={styles.uniques}>
        {works.map( work => (
          <WorkUniqueCard key={work.slug} work={work} />
        ))}
        {works.map( work => (
          work["display-type"] === 'modal' && <Link href={`/works/${work.slug}`} key={work.slug} scroll={false}>
            {work.title}
          </Link>
        ))}
      </div>
    </main>
    {children}
  </>
}
