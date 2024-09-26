import styles from "./_index.module.scss"

type Props = {
  text?: string,
  length?: number
}

export default function Dummy({
  text = 'dummy',
  length = 6,
}: Props ) {
  return <>
    <div className={`${styles.root}`}>
      {Array.from({length}).map( (v, i, a) => {
        return <div key={`${text}-${i}`}>
          {text}{a.length !== i ? <br /> : ''}
        </div>
      })}
    </div>
  </>
}
