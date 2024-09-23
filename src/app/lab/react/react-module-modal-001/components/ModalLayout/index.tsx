import { useUpdateContext } from "../../store"
import styles from "./_index.module.scss"
import { ModalBasicProps, ModalLayoutProps } from "./types"

export default function ModalLayout({
  active
}: ModalLayoutProps ) {
  if (!active) return
  switch(active) {
    case 'about':
      return <ModalBasic>
        <h1>
          Hello About!
        </h1>
      </ModalBasic>
    case 'works':
      return <ModalBasic>
        <h1>
          Hello Works!
        </h1>
      </ModalBasic>
    default:
      return <ModalBasic>
        {'default modal template.'}
      </ModalBasic>
  }
}

function ModalBasic({
  children
}: ModalBasicProps ) {
  const setActive = useUpdateContext()
  const clickHandler = () => {
    setActive(false)
  }
  return <>
    <div className={styles.root}>
      <button onClick={clickHandler} className={styles.button}>
        Close
      </button>
      {children}
    </div>
  </>
}
