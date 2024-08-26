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
      {subjects.map( subject => <LabSubjectItem key={subject.slug} subject={subject} rootPath={rootPath} />)}
    </ul>
  </>
}
