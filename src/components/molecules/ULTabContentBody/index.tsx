import styles from "./_index.module.scss"

type Props = {
  body: any
}

export default function ULTabContentBody({
  body
}: Props ) {
  return <>
    <div className={styles.root}>
      {body}
    </div>
  </>
}
