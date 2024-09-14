import styles from "./_index.module.scss"
import LabSubjectList from "@/components/organisms/LabSubjectList";
import { getLabGroup, getLabSubjects } from "@/lib/newt";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";

export default async function LabNav() {
  const subjects = await getLabSubjects()
  const labGroups = await getLabGroup()
  return <>
    {labGroups.map( (group, index) => {
      if (index >= 3) return 
      return <>
        <div className={`${styles.group} ${styles[group.slug]}`}>
          <Heading type="border">
            {group.title}
          </Heading>
          <nav className={styles.list}>
            <LabSubjectList subjects={subjects} scope={group} />
          </nav>
          <div className={styles.groupEnter}>
            <Button href={`/uni-lab/lab-group/${group.slug}/`}>
              {`「${group.title}」の全研究項目を見る`}
            </Button>
          </div>
        </div>
      </>
    })}
    <div className={`${styles.group} ${styles.noCategory}`}>
      <Heading type="border">
        {'その他の研究項目'}
      </Heading>
      <nav className={styles.list}>
        <LabSubjectList subjects={subjects} scope={'noGroup'} />
      </nav>
    </div>
  </>
}
