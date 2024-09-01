import TerminalHead from "@/components/molecules/TerminalHead";
import styles from "./_index.module.scss";

type Props = {
  children: React.ReactNode,
  title: string,
  annotation?: string,
}

export default function TerminalPanel({
  children,
  title,
  annotation,
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.head}>
        <TerminalHead title={title} annotation={annotation} />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </>
}
