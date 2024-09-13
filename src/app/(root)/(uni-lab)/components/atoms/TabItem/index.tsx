import { zenKakuGothicNew_w700 } from "@/lib/fonts";
import styles from "./_index.module.scss";

interface Props {
  name?: string,
}

export default function TabItem({
  name
}: Props ) {
  return <>
    <div className={`${styles.root} ${zenKakuGothicNew_w700.className}`}>
      {name}
    </div>
  </>
}
