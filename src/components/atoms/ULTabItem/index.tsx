import styles from "./_index.module.scss";

interface Props {
  name?: string,
}

export default function ULTabItem({
  name
}: Props ) {
  return <>
    <div className={`${styles.root}`}>
      {name}
    </div>
  </>
}
