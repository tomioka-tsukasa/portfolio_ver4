import { getContentsManagerBySlug } from "@/lib/newt";

export default async function About() {
  const contents = await getContentsManagerBySlug('portfolio-talkme');
  console.log(contents)
  if (!contents) return
  return <>
  </>
}
