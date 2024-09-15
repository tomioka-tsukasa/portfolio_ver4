'use client'

import styles from "./_index.module.scss"
import { close, push } from "@/lib/store/slice/modalCtrl"
import { useAppDispatch } from "@/lib/store/hook"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { LayoutProps, UseModalClose, UseModalPathnameClose, UseModalSetter } from "./types"

export const useModalSetter: UseModalSetter = (
  id,
  type,
  pass 
) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(push({
      id,
      type,
      pass
    }))
  }, [dispatch, id, type, pass])
}

export const useModalClose: UseModalClose = () => {
  const dispatch = useAppDispatch()
  return {
    close() {
      dispatch(close())
    }
  }
}

export const useModalPathnameClose: UseModalPathnameClose = () => {
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  useEffect(() => {
    dispatch(close())
  }, [pathname, dispatch])
}

export default function ModalLayout({
  children
}: LayoutProps ) {
  return <>
    <div className={styles.root}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  </>
}
