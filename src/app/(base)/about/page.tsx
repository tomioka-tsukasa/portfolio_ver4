import { getContentsManagerBySlug } from "@/lib/newt";
import AboutStore from "./store";
import QuestionPanel from "./components/organisms/QuestionPanel";

export default async function About() {
  const contents = await getContentsManagerBySlug('portfolio-talkme');
  if (!contents) return
  return <>
    <AboutStore>
      <QuestionPanel />
    </AboutStore>
  </>
}
