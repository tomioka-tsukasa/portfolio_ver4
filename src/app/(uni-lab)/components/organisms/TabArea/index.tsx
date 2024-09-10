import styles from "./_index.module.scss"
import TabContentBody from "@/app/(uni-lab)/components/molecules/TabContentBody"
import TabContentNotes from "../TabContentNotes"
import TabList from "@/app/(uni-lab)/components/molecules/TabList"
import TabProvider from "@/modules/Tab/components/TabProvider"
import { TabMember } from "@/modules/Tab/types"
import TabContent from "@/modules/Tab/components/TabContent"

type Props = {
  subject: Newt.LabSubject
}

export default function TabArea({
  subject
}: Props ) {
  const list: Array<TabMember> = [
    {
      id: 'body',
      name: '概要',
      content: <TabContentBody body={subject.body} />
    },
    {
      id: 'dev',
      name: '開発メモ',
      content: <TabContentNotes notes={subject["dev-note"]} />
    },
    {
      id: 'design',
      name: 'デザインメモ',
      content: <TabContentNotes notes={subject["ui-note"]} />
    },
  ]
  return <>
    <article className={styles.root}>
      <TabProvider initialState={{
        active: list[0].id
      }}>
        <TabList list={list} />
        <div className={styles.wrapper}>
          {list.map( member => (
            <TabContent member={member} key={member.id}>
              {member.content}
            </TabContent>
          ))}
        </div>
      </TabProvider>
    </article>
  </>
}
