import styles from "./_index.module.scss"
import Footer from "@/components/organisms/Footer"
import HomeScreen from "./components/molecules/HomeScreen"

export default function Home() {
  return <>
    <div className={styles.root}>
      <HomeScreen />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  </>
}
