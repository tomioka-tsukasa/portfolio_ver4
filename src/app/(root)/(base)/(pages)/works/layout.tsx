import styles from "./_index.module.scss"
import { getContentsManagerBySlug } from "@/lib/newt";
import WorkUniqueCard from "./components/organisms/WorkUniqueCard";
import WorkCard from "./components/organisms/WorkCard";
import Navigation from "@/modules/Navigation";
import Typing from "@/components/atoms/Typing";

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
      <ul className={styles.uniques}>
        {works.map( work => (
          work['display-type'] == 'unique' && (
            <li key={work.slug} className={styles.uniqueCard}> 
              <WorkUniqueCard work={work} />
            </li>
        )))}
      </ul>
      <ul className={styles.cards}>
        {works.map( work => (
          work["display-type"] === 'modal' && (
            <li key={work.slug} className={styles.card}>
              <Navigation 
                href={`/works/${work.slug}`} 
                scroll={false}
              >
                <WorkCard work={work} />
              </Navigation>
            </li>
        )))}
      </ul>
    </main>
    {children}
  </>
}
