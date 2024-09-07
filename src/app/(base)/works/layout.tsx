import styles from "./_index.module.scss"
import { getContentsManagerBySlug } from "@/lib/newt";
import WorkUniqueCard from "./components/organisms/WorkUniqueCard";
import WorkCard from "./components/organisms/WorkCard";
import Navigation from "@/modules/Navigation";

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
          <div key={work.slug} className={styles.uniqueCard}> 
            <WorkUniqueCard work={work} />
          </div>
        ))}
      </div>
      <div className={styles.cards}>
        {works.map( work => (
          work["display-type"] === 'modal' && <Navigation className={styles.card} href={`/works/${work.slug}`} key={work.slug} scroll={false}>
            <WorkCard work={work} />
          </Navigation>
        ))}
      </div>
    </main>
    {children}
  </>
}
