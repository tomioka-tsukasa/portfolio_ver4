import styles from "./_index.module.scss"
import FormatMarkdown from "@/components/organisms/FormatMarkdown"

type Props = {
  body: any
}

export default function TabContentBody({
  body
}: Props ) {
  return <>
    <div className={styles.root}>
      <FormatMarkdown body={body} mode='light' />
    </div>
  </>
}
