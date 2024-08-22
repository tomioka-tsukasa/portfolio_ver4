import MarkdownStyle from "@/components/organisms/MarkdownStyle"
import styles from "./_index.module.scss"

type Props = {
  body: any
}

export default function ULTabContentBody({
  body
}: Props ) {
  return <>
    <div className={styles.root}>
      <MarkdownStyle>
        {body}
      </MarkdownStyle>
    </div>
  </>
}
