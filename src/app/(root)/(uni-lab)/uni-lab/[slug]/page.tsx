import styles from "./_index.module.scss"
import LabScreen from "@/components/molecules/LabScreen";
import { getLabSubjectBySlug, getLabSubjects } from "@/lib/newt";
import TabArea from "@/app/(root)/(uni-lab)/components/organisms/TabArea";
import Heading from "@/components/atoms/Heading";
import { zenKakuGothicNew_w700 } from "@/lib/fonts";
import LabInfo from "../../components/molecules/LabInfo";
import Button from "@/components/atoms/Button";
import BackButton from "../../components/molecules/BackButton";
import { Metadata } from "next";

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
      <div className={styles.back}>
        <BackButton />
      </div>
      <div className={styles.head}>
        <div className={`${styles.title} ${zenKakuGothicNew_w700.className}`}> 
          <Heading>
            {subject.title}
          </Heading>
        </div>
        <div className={styles.info}> 
          <LabInfo subject={subject} />
        </div>
      </div>
      <div className={styles.screen}>
        <LabScreen slug={slug} groups={subject.groups} />
      </div>
      <div className={styles.ctrl}>
        <div className={styles.github}>
          <Button 
            href={`https://github.com/tsukasa-tomioka/portfolio_ver4/tree/main/src/app/lab/${subject.groups?.length ? `${subject.groups?.[0].slug}/` : ''}${slug}`} 
          >
            ソースファイルを見る
          </Button>
        </div>
        <div className={styles.fullscreen}> 
          <Button 
            href={`/lab/${subject.groups?.length ? `${subject.groups?.[0].slug}/` : ''}${slug}`} 
            external={true}
          >
            全画面で見る
          </Button>
        </div>
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false
    },
  }
}
