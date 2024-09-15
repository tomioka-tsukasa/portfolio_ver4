import { ModalClass } from "@/lib/store/slice/modalCtrl/types"

export type LayoutProps = {
  children: React.ReactNode
}

export type UseSetter = (
  id: ModalClass['id'],
  pass?: ModalClass['pass'],
) => void

export type UseClose = () => void

export type UsePathnameClose = () => void
