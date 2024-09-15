import { ModalClass } from "@/lib/store/slice/modalCtrl/types"

export type LayoutProps = {
  children: React.ReactNode
}

export type UseSetter = (
  id: ModalClass['id'],
  type: ModalClass['type'],
  pass?: ModalClass['pass'],
) => void

export type UseClose = () => void

export type UsePathnameClose = () => void
