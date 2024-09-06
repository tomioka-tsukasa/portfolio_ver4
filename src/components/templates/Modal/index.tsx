'use client'

import { close, push } from "@/lib/store/slice/modalCtrl"
import styles from "./_index.module.scss"
import { useAppDispatch, useAppSelector } from "@/lib/store/hook"
import { ModalClass } from "@/lib/store/slice/modalCtrl/types"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import WorkDetail from "@/app/(base)/works/components/templates/WorkDetail"

interface Props {
  setter: ModalClass,
  layout: {
    children: React.ReactNode
  }
}

export default function Modal() {
  const modalCtrl = useAppSelector(selector => selector.modalCtrl)
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  useEffect(() => {
    dispatch(close())
  }, [pathname, dispatch])
  if (!modalCtrl.open) return
  switch(modalCtrl.active.type) {
    case 'works':
      return <ModalLayout>
        <WorkDetail work={modalCtrl.active.pass} />
      </ModalLayout>
    default:
      return
  }
}

export function ModalSetter({
  id,
  type,
  pass
}: Props['setter'] ) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(push({
      id,
      type,
      pass
    }))
  }, [dispatch, id, type, pass])
  return <>
  </>
}

function ModalLayout({
  children
}: Props['layout'] ) {
  return <>
    <div className={styles.root}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  </>
}
