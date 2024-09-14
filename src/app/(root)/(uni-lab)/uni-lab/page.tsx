import styles from "./_index.module.scss"
import Image from "next/image";
import logo from "/public/logo/logo-unilab.png"
import { zenOldMincho_w700 } from "@/lib/fonts";
import LabNav from "../components/organisms/LabNav/_index";

export default function ULHome() {
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
      <LabNav />
    </main>
  </>
}
