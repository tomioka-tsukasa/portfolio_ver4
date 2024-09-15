import styles from "../../_index.module.scss"
import TabContentBody from "@/app/(root)/(uni-lab)/components/molecules/TabContentBody";
import TabList from "@/app/(root)/(uni-lab)/components/molecules/TabList";
import Heading from "@/components/atoms/Heading";
import TabContent from "@/modules/Tab/components/TabContent";
import TabProvider from "@/modules/Tab/components/TabProvider";
import { TabMember } from "@/modules/Tab/types";

const members: Array<TabMember> = [
  {
    id: 'body',
    name: '概要【Dummy】',
    content: <TabContentBody body={'概要文【Dummy】が入ります。概要文【Dummy】が入ります。概要文【Dummy】が入ります。概要文【Dummy】が入ります。概要文【Dummy】が入ります。'} />
  },
  {
    id: 'dev',
    name: 'メモ【Dummy】',
    content: <TabContentBody body={'メモ【Dummy】が入ります。メモ【Dummy】が入ります。メモ【Dummy】が入ります。メモ【Dummy】が入ります。メモ【Dummy】が入ります。'} />
  },
  {
    id: 'design',
    name: 'トーク【Dummy】',
    content: <TabContentBody body={'トーク【Dummy】が入ります。トーク【Dummy】が入ります。トーク【Dummy】が入ります。トーク【Dummy】が入ります。トーク【Dummy】が入ります。'} />
  },
]

export default function OtherTab() {
  return <>
    <div className={styles.heading}>
      <Heading tag="h3" type={'border'}>
        {'Providerで囲んだ範囲しか影響しない'}
      </Heading>
    </div>
    <div className={styles.tabArea}>
      <TabProvider initialState={{
        active: members[0].id
      }}>
        <TabList list={members} />
        <div className={styles.wrapper}>
          {members.map( member => (
            <TabContent member={member} key={member.id}>
              {member.content}
            </TabContent>
          ))}
        </div>
      </TabProvider>
    </div>
  </>
}
