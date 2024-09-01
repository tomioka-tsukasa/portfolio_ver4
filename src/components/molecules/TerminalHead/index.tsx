import { zenOldMincho_w700 } from "@/lib/fonts";
import TerminalCtrlIcons from "../TerminalCtrlIcons";
import styles from "./_index.module.scss";

type Props = {
  title: string,
  annotation?: string,
}

export default function TerminalHead({
  title,
  annotation
}: Props ) {
  return <>
    <div className={styles.root}>
      <TerminalCtrlIcons />
      <div className={`${styles.title} ${zenOldMincho_w700.className}`}>
        {title}
      </div>
      <div className={styles.annotation}>
        {annotation}
      </div>
    </div>
  </>
}
