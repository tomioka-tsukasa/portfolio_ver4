import styles from "./_index.module.scss"
import Dummy from "./components/atoms/Dummy"
import PinScreen from "./components/organisms/PinScreen"

export default function WebCreativeScrollPinImageComparison() {
  return <>
    <div className={styles.root}>
      <Dummy text={'scroll down.'} />
      <PinScreen />
      <Dummy />
    </div>
  </>
}
