import styles from "./_index.module.scss"
import { getContentsManagerBySlug } from "@/lib/newt";
import WorkUniqueCard from "./components/organisms/WorkUniqueCard";

export default async function Works() {
  const contents = await getContentsManagerBySlug('portfolio-works');
  if (!contents) return
  const works = contents['works-field']
  if (!works) return
  return <>
    <div className={styles.uniques}>
      {works.map( work => (
        <WorkUniqueCard key={work.slug} work={work} />
      ))}
    </div>
  </>
}
