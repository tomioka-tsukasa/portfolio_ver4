import Heading from "@/components/atoms/Heading"
import styles from "./_index.module.scss"
import Image from "next/image"
import FormatMarkdown from "@/components/organisms/FormatMarkdown"
import { zenOldMincho_w700 } from "@/lib/fonts"
import UniqueButton from "../../atoms/UniqueButton"
import Button from "@/components/atoms/Button"

type Props = {
  work: Newt.ContentsWork
}

export default function WorkDetail({
  work
}: Props ) {
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
          unoptimized
        />
      </div>
      <div className={styles.link}>
        <UniqueButton url={work.url ?? '/'}>
          {work["button-text"]}
        </UniqueButton>
      </div>
      <div className={styles.description}> 
        {work.body && (
          <FormatMarkdown body={work.body} />
        )}
      </div>
      <div className={styles.back}>
        <Button type={'routerBack'}>
          BACK
        </Button>
      </div>
    </div>
  </>
}
