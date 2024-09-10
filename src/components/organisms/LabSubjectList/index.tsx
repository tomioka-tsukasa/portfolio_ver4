import styles from "./_index.module.scss";
import LabSubjectItem from "@/components/molecules/LabSubjectItem";

export default function LabSubjectList({
  subjects,
  rootPath = '/uni-lab/'
}: {
  subjects: Array<Newt.LabSubject>,
  rootPath?: string
}) {
  return <>
    <ul className={styles.root}>
      {subjects.map( subject => <li key={subject.slug}>
        <LabSubjectItem subject={subject} rootPath={rootPath} />
      </li>)}
    </ul>
  </>
}
