import styles from "./_index.module.scss"
import LabSubjectList from "@/components/organisms/LabSubjectList";
import { getLabGroup, getLabSubjects } from "@/lib/newt";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import { isMatchGroup, isNoGroup } from "./utils";

export default async function LabNav() {
  const subjects = await getLabSubjects()
  const labGroups = await getLabGroup()
  if (!subjects || !labGroups) return 
  return <>
    {labGroups.map( group => (
      <div className={`${styles.group} ${styles[group.slug]}`} key={group.slug}>
        <Heading type="border">
          {group.title}
        </Heading>
        <nav className={styles.list}>
          <LabSubjectList subjects={subjects.filter( subject => isMatchGroup(subject, group))} scope={group} />
        </nav>
        <div className={styles.groupEnter}>
          <Button href={`/uni-lab/lab-group/${group.slug}/`}>
            {`「${group.title}」の全研究項目を見る`}
          </Button>
        </div>
      </div>
    ))}
    <div className={`${styles.group} ${styles.noCategory}`}>
      <Heading type="border">
        {'その他の研究項目'}
      </Heading>
      <nav className={styles.list}>
        <LabSubjectList 
          subjects={subjects.filter( subject => isNoGroup(subject))} 
          scope={'noGroup'} 
          max={-1}
        />
      </nav>
    </div>
  </>
}
