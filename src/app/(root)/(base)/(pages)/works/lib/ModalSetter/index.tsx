'use client'

import { useModalSetter } from "@/modules/Modal"

type Props = {
  work: Newt.ContentsWork,
  slug: string
}

export default function ModalSetter({
  work
}: Props ) {
  useModalSetter(
    'works',
    {work}
  )
  return <></>
}
