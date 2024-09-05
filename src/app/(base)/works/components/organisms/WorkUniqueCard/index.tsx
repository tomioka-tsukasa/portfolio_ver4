import Heading from "@/components/atoms/Heading"
import styles from "./_index.module.scss"
import Image from "next/image"
import FormatMarkdown from "@/components/organisms/FormatMarkdown"
import Button from "@/components/atoms/Button"
import { zenOldMincho_w700 } from "@/lib/fonts"

type Props = {
  work: Newt.ContentsWork
}

export default async function WorkUniqueCard({
  work
}: Props ) {
  if (work["display-type"] !== 'unique') return
  return <>
    <div className={styles.root}>
      <div className={styles.heading}>
        <Heading tag={'h3'}>
          {work.title}
        </Heading>
      </div>
      <div className={styles.thumbnail}>
        <Image 
          src={work.thumbnail.src}
          alt=''
          width={work.thumbnail.width}
          height={work.thumbnail.height}
          className={styles.image}
        />
      </div>
      <div className={styles.description}> 
        {work.body && (
          <FormatMarkdown body={work.body} />
        )}
      </div>
      <div className={`${styles.button} ${zenOldMincho_w700.className}`}>
        <Button href={work.url ?? '/'}>
          {work["button-text"] || 'ENTRY'}
        </Button>
      </div>
    </div>
  </>
}
