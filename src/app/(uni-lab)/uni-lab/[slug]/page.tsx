import Draft_CtrlButton from "@/components/molecules/Draft_CtrlButton";
import styles from "./_index.module.scss"
import LabScreen from "@/components/molecules/LabScreen";
import { getLabSubjectBySlug, getLabSubjects } from "@/lib/newt";
import ULTabArea from "@/components/organisms/ULTabArea";
import Link from "next/link";

type Props = {
  params: {
    slug: string
  }
}

export default async function ULSubject({
  params
}: Props ) {
  const { slug } = params
  const subject = await getLabSubjectBySlug(slug)
  if (!subject) return
  return <>
    <div className={styles.root}>
      <div className={styles.ctrl}>
        <Draft_CtrlButton />
      </div>
      <div className={styles.github}>
        <Link href={`https://github.com/tsukasa-tomioka/portfolio_ver4/tree/main/src/app/lab/${slug}`}>GitHubの研究ファイルページへ</Link>
      </div>
      <div className={styles.screen}>
        <LabScreen slug={slug} />
      </div>
      <div className={styles.notes}>
        <ULTabArea subject={subject} />
      </div>
    </div>
  </>
}

export async function generateStaticParams() {
  const items = await getLabSubjects()
  return items.map( item => (
    {
      slug: item.slug
    }
  ))
}
