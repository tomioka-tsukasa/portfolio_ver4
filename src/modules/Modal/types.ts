import { ModalClass } from "@/lib/store/slice/modalCtrl/types"

export type LayoutProps = {
  children: React.ReactNode
}

export type UseModalSetter = (
  id: ModalClass['id'],
  type: ModalClass['type'],
  pass?: ModalClass['pass'],
) => void

export type UseModalClose = () => {
  close: () => void
}

export type UseModalPathnameClose = () => void
