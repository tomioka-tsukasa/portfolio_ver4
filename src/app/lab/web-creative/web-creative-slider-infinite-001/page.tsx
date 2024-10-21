import styles from "./_index.module.scss"
import SliderInfiniteUi from "./components/ui/SliderInfinite"

export default function WebCreativeSliderInfinite() {
  return <>
    <div className={styles.root}>
      <SliderInfiniteUi content={<div>HELLO WORLD.</div>} />
      <SliderInfiniteUi content={<div>HTML要素なら何でも挿入できるよ。</div>} />
      <SliderInfiniteUi content={<div>VISION. AMBITION.</div>} />
    </div>
  </>
}
