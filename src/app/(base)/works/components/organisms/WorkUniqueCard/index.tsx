'use client'

import Heading from "@/components/atoms/Heading"
import styles from "./_index.module.scss"
import Image from "next/image"
import FormatMarkdown from "@/components/organisms/FormatMarkdown"
import Button from "@/components/atoms/Button"
import { zenOldMincho_w700 } from "@/lib/fonts"
import Typing from "@/components/atoms/Typing"
import { useState } from "react"

type Props = {
  work: Newt.ContentsWork
}

export default function WorkUniqueCard({
  work
}: Props ) {
  if (work["display-type"] !== 'unique') return
  const [state, setState] = useState(false)
  const mouseEnterHander = () => {
    setState(true)
  }
  return <>
    <div className={styles.root} onMouseEnter={mouseEnterHander}>
      <div className={styles.heading}>
        <Heading tag={'h3'}>
          <Typing
            text={work.title} 
            speed={3} 
            trigger={state}
          />
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
