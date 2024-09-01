import styles from "./_index.module.scss"

interface Props {
  items: Array<Newt.ContentsQa>
  category: string
}

export default function QuestionList({
  items,
  category
}: Props ) {
  const list: Array<Newt.ContentsQa> = items.filter( item => item.group.includes(category) )
  return <>
    <div className={`${styles.root}`}>
      <ul>
        {list.map( item => (
          <li key={item.slug} data-slug={item.slug}>
            {item.question}
          </li>
        ))}
      </ul>
    </div>
  </>
}
