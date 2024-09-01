import { getContentsManagerBySlug } from "@/lib/newt";
import styles from "./_index.module.scss"
import AnswerMessage from "../../atoms/AnswerMessage";
import Image from "next/image";
import ProfileIcon from "¥/public/imgs/img-profile-icon-tomioka-tsukasa.jpg"

export default async function AnswerPanel() {
  const contents = await getContentsManagerBySlug('portfolio-talkme');
  if (!contents) return
  return <>
    <div className={styles.root}>
      <div className={styles.icon}>
        <Image 
          src={ProfileIcon}
          alt=''
        />
      </div>
      <div className={styles.message}>
        {contents['qa-item-field'].map( content => (
          <AnswerMessage content={content} key={content.slug} />
        ))}
      </div>
    </div>
  </>
}
