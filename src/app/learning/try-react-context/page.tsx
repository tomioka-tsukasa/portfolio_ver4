import ChangeTheme from "./components/ChangeTheme";
import styles from "./page.module.css";

export default function Home() {
  console.log('server');
  return (
    <main>
      <ChangeTheme />
    </main>
  )
}
