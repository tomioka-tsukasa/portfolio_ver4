import { usePathname, useRouter } from "next/navigation"
import { useWatchPath } from "../useWatchPath"
import { INTERACTION_TIME, INTERACTION_TIME_SHORT, NAVIGATING_CLASS } from "../../const"
import { useAppDispatch } from "@/lib/store/hook"
import { push } from "@/lib/store/slice/navigationCtrl"

type ClickEvent = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
  typing?: boolean,
  scroll?: boolean
) => void

export const useClickManager = () => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  useWatchPath()
  const clickEvent: ClickEvent = (
    event,
    href,
    typing = true,
    scroll = true
  ) => {
    if (pathname.split('/').join('') === href.split('/').join('')) return
    event.preventDefault()
    document.body.classList.add(NAVIGATING_CLASS)
    if (typing) dispatch(push(`Access to ${href}...`))
    else dispatch(push(' '))
    setTimeout(() => {
      router.push(href, {
        scroll
      })
    }, typing ? INTERACTION_TIME : INTERACTION_TIME_SHORT);
  }
  return { clickEvent }
}
