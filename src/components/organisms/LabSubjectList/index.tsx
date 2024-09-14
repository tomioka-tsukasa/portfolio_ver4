import styles from "./_index.module.scss";
import LabSubjectItem from "@/components/molecules/LabSubjectItem";

type Props = {
  subjects: Array<Newt.LabSubject>,
  rootPath?: string,
  scope?: Newt.LabGroup | 'noGroup',
  max?: number,
}

type IsPush = (
  subject: Newt.LabSubject,
  index: number,
  scope?: Newt.LabGroup | 'noGroup',
  max?: number,
) => boolean

const isPush: IsPush = (
  subject,
  index = 0,
  scope,
  max = 3,
) => {
  if (!scope) return false
  if (max !== -1 && index >= max) return false
  switch (scope) {
    case 'noGroup':
      if (!subject.groups?.length) return true
      else return false
    default:
      const group: Newt.LabGroup = scope
      if (
        subject.groups?.length
        && subject.groups?.[0].slug === group.slug
      ) return true
      else false
  }
  return false
}

export default function LabSubjectList({
  subjects,
  rootPath = '/uni-lab/',
  scope,
  max = 3
}: Props ) {
  return <>
    <ul className={styles.root}>
      {subjects.map( (subject, index) => isPush(subject, index, scope, max) && (
        <li key={subject.slug} className={styles.item}>
          <LabSubjectItem subject={subject} rootPath={rootPath} />
        </li>
      ))}
    </ul>
  </>
}
