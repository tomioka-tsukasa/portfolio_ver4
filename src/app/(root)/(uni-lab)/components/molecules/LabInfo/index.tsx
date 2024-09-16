import Label from "@/components/atoms/Label"
import styles from "./_index.module.scss"
import UpdateDate from "@/components/molecules/UpdateDate"

type Props = {
  subject: Newt.LabSubject,
}

export default function LabInfo({
  subject
}: Props ) {
  return <>
    <div className={styles.root}>
      {subject.status.length
        ? <ul className={styles.labels}>
          {subject.status.map( label => (
            <li key={label}>
              <Label slug={label} />
            </li>
          ))}
        </ul>
        : undefined
      }
      <div className={styles.date}>
        <UpdateDate updateTime={subject._sys.raw.updatedAt} />
      </div>
    </div>
  </>
}
