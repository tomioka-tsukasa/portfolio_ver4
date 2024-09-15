'use client'

import { useAppSelector } from "@/lib/store/hook"
import ModalLayout, { useModalPathnameClose } from "@/modules/Modal"
import WorkDetail from "./WorkDetail"

export default function Modal() {
  const modalCtrl = useAppSelector(selector => selector.modalCtrl)
  useModalPathnameClose()
  if (!modalCtrl.open) return
  switch(modalCtrl.active.id) {
    case 'works':
      return <ModalLayout>
        <WorkDetail work={modalCtrl.active.pass?.work} />
      </ModalLayout>
    default:
      return <ModalLayout>
        {'default modal template.'}
      </ModalLayout>
  }
}
