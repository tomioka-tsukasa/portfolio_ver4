import Modal from "@/app/components/Modal/Modal"
import ModalWork from "@/app/components/Modal/templates/Work"
import worksData from "@/data/works.json"
import Link from "next/link"

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const currentWork = worksData.filter( work => work.slug === params.slug)[0]
  return <>
    <Modal>
      <ModalWork data={currentWork}>
        <Link href={`/learning/test-works/`}>
          一覧へ戻る
        </Link>
      </ModalWork>
    </Modal>
  </>
}

export async function generateStaticParams() {
  return worksData.map( work => {
    return {slug: work.slug}
  })
}
