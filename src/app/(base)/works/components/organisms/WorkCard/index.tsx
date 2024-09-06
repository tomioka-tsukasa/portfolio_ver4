import Image from "next/image"
import styles from "./_index.module.scss"
import Heading from "@/components/atoms/Heading"
import { zenOldMincho_w400 } from "@/lib/fonts"

type Props = {
  work: Newt.ContentsWork
}

export default async function WorkCard({
  work
}: Props ) {
  if (work["display-type"] !== 'modal') return 
  return <>
    <div className={styles.root}>
      <div className={styles.thumbnail}>
        <Image 
          src={work.thumbnail.src}
          alt=''
          width={work.thumbnail.width}
          height={work.thumbnail.height}
          className={styles.image}
        />
      </div>
      <div className={styles.heading}>
        <Heading tag={'h3'} size={'small'}>
          {work.title}
        </Heading>
        <div className={`${styles.headingSlug} ${zenOldMincho_w400.className}`}>
          {work.slug.split('-').join(' ').toUpperCase()}
        </div>
      </div>
      <div className={styles.tags}>
        {work.tags && work.tags.split('\n').join(', ')}
      </div>
    </div>
  </>
}
