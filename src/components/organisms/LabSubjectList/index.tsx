import styles from "./_index.module.scss";
import LabSubjectItem from "@/components/molecules/LabSubjectItem";

type Props = {
  subjects: Array<Newt.LabSubject>,
  rootPath?: string,
  scope?: Newt.LabGroup | 'noGroup'
}

type IsPush = (
  subject: Newt.LabSubject,
  scope: Newt.LabGroup | 'noGroup'
) => boolean

export default function LabSubjectList({
  subjects,
  rootPath = '/uni-lab/',
  scope
}: Props ) {
  const isPush: IsPush = (
    subject,
    scope,
  ) => {
    if (
      scope === 'noGroup'
      && !subject.groups?.length
    ) return true
    else if (
      scope !== 'noGroup'
    ) {
      const group: Newt.LabGroup = scope
      if (
        subject.groups?.length
        && subject.groups?.[0].slug === group.slug
      ) return true
    }
    return false
  }
  return <>
    <ul className={styles.root}>
      {subjects.map( subject => (scope ? isPush(subject, scope) : true) && (
        <li key={subject.slug}>
          <LabSubjectItem subject={subject} rootPath={rootPath} />
        </li>
      ))}
    </ul>
  </>
}
