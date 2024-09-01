import styles from "./_index.module.scss"
import ULTabContentBody from "@/components/molecules/ULTabContentBody"
import ULTabContentNotes from "../ULTabContentNotes"
import ULTabList from "@/components/molecules/ULTabList"
import TabProvider from "@/modules/Tab/components/TabProvider"
import { TabMember } from "@/modules/Tab/types"
import TabContent from "@/modules/Tab/components/TabContent"

type Props = {
  subject: Newt.LabSubject
}

export default function ULTabArea({
  subject
}: Props ) {
  const list: Array<TabMember> = [
    {
      id: 'body',
      name: '概要',
      content: <ULTabContentBody body={subject.body} />
    },
    {
      id: 'dev',
      name: '開発メモ',
      content: <ULTabContentNotes notes={subject["dev-note"]} />
    },
    {
      id: 'design',
      name: 'デザインメモ',
      content: <ULTabContentNotes notes={subject["ui-note"]} />
    },
  ]
  return <>
    <div className={styles.root}>
      <TabProvider initialState={{
        active: list[0].id
      }}>
        <ULTabList list={list} />
        <div className={styles.wrapper}>
          {list.map( member => (
            <TabContent member={member} key={member.id}>
              {member.content}
            </TabContent>
          ))}
        </div>
      </TabProvider>
    </div>
  </>
}
