import styles from "./_index.module.scss"
import LabSubjectList from "@/components/organisms/LabSubjectList";
import { getLabGroup, getLabSubjects } from "@/lib/newt";
import Image from "next/image";
import logo from "/public/logo/logo-unilab.png"
import { zenOldMincho_w700 } from "@/lib/fonts";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";

export default async function ULHome() {
  const subjects = await getLabSubjects()
  const labGroups = await getLabGroup()
  return <>
    <main className={styles.root}>
      <div className={styles.mv}>
        <Image
          className={styles.logo}
          src={logo}
          alt=''
        />
        <h1 className={`${styles.title} ${zenOldMincho_w700.className}`}>
          Uni Lab.｜ハイエンドWeb制作研究所【開発途中！】
        </h1> 
      </div>
      {labGroups.map( (group, index) => {
        if (index >= 3) return 
        return <>
          <div className={`${styles.group} ${styles[group.slug]}`}>
            <Heading type="border">
              {group.title}
            </Heading>
            <div className={styles.list}>
              <LabSubjectList subjects={subjects} scope={group} />
            </div>
            <div className={styles.groupEnter}>
              <Button href={`/uni-lab/lab-group/${group.slug}/`}>
                {`全ての「${group.title}」の研究項目を見る`}
              </Button>
            </div>
          </div>
        </>
      })}
      <div className={`${styles.group} ${styles.noCategory}`}>
        <Heading type="border">
          {'その他の研究項目'}
        </Heading>
        <div className={styles.list}>
          <LabSubjectList subjects={subjects} scope={'noGroup'} />
        </div>
      </div>
    </main>
  </>
}
