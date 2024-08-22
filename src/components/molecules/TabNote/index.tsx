import { NewtNote } from "@/types/newt"
import styles from "./_index.module.scss"
import Arrow from "@/components/atoms/Arrow"
import { zenKakuGothicNew_w700 } from "@/lib/fonts";
import MarkdownStyle from "@/components/organisms/MarkdownStyle";

type Props = {
  note: NewtNote
}

export default function TabNote({
  note
}: Props ) {
  const isUrl = (
    note.title.includes('http')
    ||
    note["url-type"]
    ? true
    : false
  )
  const printTitle = (title: string) => {
    if (!title) title = '[Newt Bot] タイトルを入力してね！'
    const print = isUrl 
      ? <a className={styles.link} href={title} target="_blank">{title}</a> 
      : title
    return print
  }
  return <>
    <div className={styles.root}>
      <div className={styles.head}>
        {!isUrl
          ? <div className={styles.thumbnail}>
            {note.thumbnail.value ?? '📔'}
          </div>
          : ''
        }
        <div className={`${styles.title} ${zenKakuGothicNew_w700.className}`}>
          {printTitle(note.title)}
        </div>
        <div className={styles.arrow}>
          <Arrow fill="black" />
        </div>
      </div>
      {note.body 
        ? <div className={styles.cont}>
          <MarkdownStyle mode='light'>
            {note.body}
          </MarkdownStyle>
        </div>
        : ''
      }
    </div>
  </>
}
