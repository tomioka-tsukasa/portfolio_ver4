import Draft_CtrlButton from "@/components/molecules/Draft_CtrlButton";
import styles from "./_index.module.scss"
import LabScreen from "@/components/molecules/LabScreen";
import { getLabSubjectBySlug, getLabSubjects } from "@/lib/newt";
import TabArea from "@/app/(root)/(uni-lab)/components/organisms/TabArea";
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
    <main className={styles.root}>
      <div className={styles.ctrl}>
        <Draft_CtrlButton />
        <div className={styles.github}>
          <Link href={`https://github.com/tsukasa-tomioka/portfolio_ver4/tree/main/src/app/lab/${slug}`} target="_blank">GitHubの研究ファイルページへ</Link>
        </div>
      </div>
      <div className={styles.screen}>
        <LabScreen slug={slug} groups={subject.groups} />
      </div>
      <div className={styles.notes}>
        <TabArea subject={subject} />
      </div>
    </main>
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
