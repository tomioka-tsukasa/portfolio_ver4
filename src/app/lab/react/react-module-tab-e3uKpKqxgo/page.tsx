import styles from "./_index.module.scss"
import TabContentBody from "@/app/(root)/(uni-lab)/components/molecules/TabContentBody"
import TabList from "@/app/(root)/(uni-lab)/components/molecules/TabList"
import Heading from "@/components/atoms/Heading"
import TabContent from "@/modules/Tab/components/TabContent"
import TabProvider from "@/modules/Tab/components/TabProvider"
import { TabMember } from "@/modules/Tab/types"

export default function LabReactModuleTab() {
  const list: Array<TabMember> = [
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
  const dummy: Array<TabMember> = [
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
  return <>
    <article className={styles.root}>
      <div className={styles.heading}>
        <Heading tag="h3" type={'border'}>
          {'タグが複数あっても連携可能'}
        </Heading>
      </div>
      <div className={styles.tabArea}>
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
          <div className={styles.wrapper}>
            {list.map( member => (
              <TabContent member={member} key={member.id}>
                {member.content}
              </TabContent>
            ))}
          </div>
          <TabList list={list} />
        </TabProvider>
      </div>
      <div className={styles.heading}>
        <Heading tag="h3" type={'border'}>
          {'Providerで囲んだ範囲しか影響しない'}
        </Heading>
      </div>
      <div className={styles.tabArea}>
        <TabProvider initialState={{
          active: list[0].id
        }}>
          <TabList list={dummy} />
          <div className={styles.wrapper}>
            {dummy.map( member => (
              <TabContent member={member} key={member.id}>
                {member.content}
              </TabContent>
            ))}
          </div>
        </TabProvider>
      </div>
    </article>
  </>
}
