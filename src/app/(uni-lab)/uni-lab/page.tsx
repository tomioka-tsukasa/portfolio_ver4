import styles from "./_index.module.scss"
import LabSubjectList from "@/components/organisms/LabSubjectList";
import { getLabSubjects } from "@/lib/newt";
import Image from "next/image";
import logo from "/public/logo/logo-unilab.png"
import { zenOldMincho_w700 } from "@/lib/fonts";

export default async function ULHome() {
  const subjects = await getLabSubjects()
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
      <div className={styles.list}>
        <LabSubjectList subjects={subjects} />
      </div>
    </main>
  </>
}
