import styles from "./_index.module.scss"
import { TabProvider } from "@/modules/Tab/components/TabProvider";
import QaCategoryList from "../../molecules/QaCategoryList";
import { TabMember } from "@/modules/Tab/types";
import { getContentsManagerBySlug } from "@/lib/newt";
import QaCategory from "../../atoms/QaCategory";
import QuestionList from "../../molecules/QuestionList";
import { TabContent } from "@/modules/Tab/components/TabContent";

function getCategoryName(slug: string) {
  switch(slug) {
    case 'myself':
      return '自己紹介'
    case 'portfolio':
      return 'ポートフォリオについて'
    case 'skill':
      return 'エンジニアスキル'
    case 'work-style':
      return 'ワークスタイル'
    case 'life-style':
      return 'ライフスタイル'
    default:
      return '一致するカテゴリーがありません。'
  }
}

export default async function QuestionPanel() {
  const contents = await getContentsManagerBySlug('portfolio-talkme');
  if (!contents) return
  const tabList: Array<TabMember> = contents['qa-category'].map( category => ({
    id: category,
    trigger: <QaCategory name={getCategoryName(category)} slug={category} />,
    content: '',
  }))
  return <>
    <div className={styles.root}>
      <TabProvider initialState={{active: 'myself'}}>
        <QaCategoryList list={tabList} />
        {tabList.map( member => (
          <TabContent member={member} key={member.id}>
            <QuestionList items={contents['qa-item-field']} category={member.id} />
          </TabContent>
        ))}
      </TabProvider>
    </div>
  </>
}
