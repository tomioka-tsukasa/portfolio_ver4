import styles from "./_index.module.scss"
import { getContentsManagerBySlug } from "@/lib/newt";
import AboutStore from "./store";
import QuestionPanel from "./components/organisms/QuestionPanel";
import AnswerPanel from "./components/organisms/AnswerPanel";

export default async function About() {
  const contents = await getContentsManagerBySlug('portfolio-talkme');
  if (!contents) return
  return <>
    <AboutStore initialState={{
      qa: {
        active: 'test-001'
      }
    }}>
      <div className={styles.question}>
        <QuestionPanel />
      </div>
      <div className={styles.answer}>
        <AnswerPanel />
      </div>
    </AboutStore>
  </>
}
