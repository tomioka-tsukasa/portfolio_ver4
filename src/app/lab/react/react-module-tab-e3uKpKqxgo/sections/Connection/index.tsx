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
    name: '概要',
    content: <TabContentBody body={'概要文が入ります。概要文が入ります。概要文が入ります。概要文が入ります。概要文が入ります。'} />
  },
  {
    id: 'dev',
    name: 'メモ',
    content: <TabContentBody body={'メモが入ります。メモが入ります。メモが入ります。メモが入ります。メモが入ります。'} />
  },
  {
    id: 'design',
    name: 'トーク',
    content: <TabContentBody body={'トークが入ります。トークが入ります。トークが入ります。トークが入ります。トークが入ります。'} />
  },
]

export default function Connection() {
  return <>
    <div className={styles.heading}>
      <Heading tag="h3" type={'border'}>
        {'タブが複数あっても連携可能'}
      </Heading>
    </div>
    <p className={styles.p}>
      タブが複数あっても、その間にコンテンツがあっても、TabProviderで囲めば全て連携が可能。
    </p>
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
        <div className={styles.dummyArea}>
          <p>
            dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. dummy. 
          </p>
        </div>
        <TabList list={members} />
      </TabProvider>
    </div>
  </>
}
