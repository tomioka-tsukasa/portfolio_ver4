import Heading from "@/components/atoms/Heading"
import styles from "./_index.module.scss"
import Image from "next/image"
import FormatMarkdown from "@/components/organisms/FormatMarkdown"
import UniqueButton from "../../atoms/UniqueButton"
import Button from "@/components/atoms/Button"
import Figcaption from "@/components/atoms/Figcaption"

type Props = {
  work: Newt.ContentsWork
}

export default function WorkDetail({
  work
}: Props ) {
  return <>
    <article className={styles.root}>
      <Heading tag={'h1'}>
        {work.title}
      </Heading>
      <figure className={styles.thumbnail}>
        <Image 
          src={work.thumbnail.src}
          alt=''
          width={work.thumbnail.width}
          height={work.thumbnail.height}
          className={styles.image}
          unoptimized
        />
        <Figcaption caption={`${work.title}`} />
      </figure>
      <div className={`${styles.link} ${work.url ? '' : styles.isUnactive}`}>
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
        <Button type={'routerBack'} typing={true}>
          BACK
        </Button>
      </div>
    </article>
  </>
}
