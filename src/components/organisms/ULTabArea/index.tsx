import { ListType } from "@/modules/Tab/types"
import styles from "./_index.module.scss"
import Tab from "@/modules/Tab"
import ULTabContentBody from "@/components/molecules/ULTabContentBody"
import ULTabContentNotes from "../ULTabContentNotes"

type Props = {
  subject: Newt.LabSubject
}

export default function ULTabArea({
  subject
}: Props ) {
  const list: ListType = [
    {
      id: 'body',
      default: true,
      name: '概要',
      component: <ULTabContentBody body={subject.body} />
    },
    {
      id: 'dev',
      default: false,
      name: '開発メモ',
      component: <ULTabContentNotes notes={subject["dev-note"]} />
    },
    {
      id: 'design',
      default: false,
      name: 'デザインメモ',
      component: <ULTabContentNotes notes={subject["ui-note"]} />
    },
  ]
  return <>
    <div className={styles.root}>
      <Tab initialState={{
        active: list[0].id
      }} list={list} />
    </div>
  </>
}
