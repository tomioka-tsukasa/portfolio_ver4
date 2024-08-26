import styles from "./_index.module.scss"
import { zenKakuGothicNew_w700 } from "@/lib/fonts"

type Props = {
  slug: Newt.LabLabel,
  text?: string | null,
}

const textSelector: Record<string, string> = {
  progress: '研究中',
  task: '課題有り',
}

export default function Label({
  slug,
  text = null
}: Props ) {
  return <>
    <div className={`${styles.root} ${styles[slug]}  ${zenKakuGothicNew_w700.className}`}>
      {text ?? textSelector[slug]}
    </div>
  </>
}
