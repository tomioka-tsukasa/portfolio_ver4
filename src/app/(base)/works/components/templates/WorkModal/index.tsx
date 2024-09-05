import styles from "./_index.module.scss"

type Props = {
  children: React.ReactNode
}

export default function WorkModal({
  children
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  </>
}
