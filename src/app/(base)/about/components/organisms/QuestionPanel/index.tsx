import styles from "./_index.module.scss"
import TabProvider from "@/modules/Tab/components/TabProvider";
import QaCategoryList from "../../molecules/QaCategoryList";
import { TabMember } from "@/modules/Tab/types";
import { getContentsManagerBySlug } from "@/lib/newt";
import QuestionList from "../../molecules/QuestionList";
import TabContent from "@/modules/Tab/components/TabContent";
import TerminalPanel from "@/components/organisms/TerminalPanel";

export default async function QuestionPanel() {
  const contents = await getContentsManagerBySlug('portfolio-talkme');
  if (!contents) return
  const tabList: Array<TabMember> = contents['qa-category'].map( category => ({
    id: category.property,
    opt: {
      category
    }
  }))
  return <>
    <article className={styles.root}>
      <TabProvider initialState={{active: tabList[0].id}}>
        <TerminalPanel title={'- Question to Tsukasa Tomioka. -'} annotation={'⌥⌘1'}>
          <div className={styles.wrapper}>
            <p className={styles.console}>
              tsukasa.tomioka.@portfolio ~ % selected question category: “Who Are You”, Hit 14 questions. ｜
            </p>
            <div className={styles.categorys}>
              <QaCategoryList list={tabList} />
            </div>
            <div className={styles.contents}>
              {tabList.map( member => (
                <TabContent member={member} key={member.id}>
                  <QuestionList items={contents['qa-item-field']} category={member.id} />
                </TabContent>
              ))}
            </div>
          </div>
        </TerminalPanel>
      </TabProvider>
    </article>
  </>
}
