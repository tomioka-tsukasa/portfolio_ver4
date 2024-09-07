import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { NAVIGATING_CLASS } from "../../const"
import { push } from "@/lib/store/slice/navigationCtrl"
import { useAppDispatch } from "@/lib/store/hook"

export const useWatchPath = () => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  useEffect(() => {
    document.body.classList.remove(NAVIGATING_CLASS)
    dispatch(push(' '))
  }, [pathname])
}
