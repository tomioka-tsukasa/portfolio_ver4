import styles from "./_index.module.scss"
import TabProvider from "@/modules/Tab/components/TabProvider";
import QaCategoryList from "../../molecules/QaCategoryList";
import { TabMember } from "@/modules/Tab/types";
import { getContentsManagerBySlug } from "@/lib/newt";
import QaCategory from "../../atoms/QaCategory";
import QuestionList from "../../molecules/QuestionList";
import TabContent from "@/modules/Tab/components/TabContent";

export default async function QuestionPanel() {
  const contents = await getContentsManagerBySlug('portfolio-talkme');
  if (!contents) return
  const tabList: Array<TabMember> = contents['qa-category'].map( category => ({
    id: category,
    content: '',
  }))
  return <>
    <div className={styles.root}>
      <TabProvider initialState={{active: 'myself'}}>
        <QaCategoryList list={tabList} />
        {tabList.map( member => (
          <div className={styles.contents}>
            <TabContent member={member} key={member.id}>
              <QuestionList items={contents['qa-item-field']} category={member.id} />
            </TabContent>
          </div>
        ))}
      </TabProvider>
    </div>
  </>
}
