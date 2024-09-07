import { usePathname, useRouter } from "next/navigation"
import { useWatchPath } from "../useWatchPath"
import { INTERACTION_TIME, NAVIGATING_CLASS } from "../../const"
import { useAppDispatch } from "@/lib/store/hook"
import { push } from "@/lib/store/slice/navigationCtrl"

type FunctionType = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
) => void

export const useClickManager = () => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  useWatchPath()
  const clickEvent: FunctionType = (
    event,
    href
  ) => {
    if (pathname === href) return
    event.preventDefault()
    document.body.classList.add(NAVIGATING_CLASS)
    dispatch(push(href))
    setTimeout(() => {
      router.push(href)
    }, INTERACTION_TIME);
  }
  return { clickEvent }
}
