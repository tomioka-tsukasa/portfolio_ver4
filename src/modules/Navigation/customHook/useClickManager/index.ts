import { usePathname, useRouter } from "next/navigation"
import { useWatchPath } from "../useWatchPath"
import { INTERACTION_TIME, INTERACTION_TIME_SHORT, NAVIGATING_CLASS } from "../../const"
import { useAppDispatch } from "@/lib/store/hook"
import { push } from "@/lib/store/slice/navigationCtrl"

type FunctionType = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
  typing?: boolean
) => void

export const useClickManager = () => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  useWatchPath()
  const clickEvent: FunctionType = (
    event,
    href,
    typing = true
  ) => {
    if (pathname.split('/').join('') === href.split('/').join('')) return
    event.preventDefault()
    document.body.classList.add(NAVIGATING_CLASS)
    if (typing) dispatch(push(`Access to ${href}...`))
    else dispatch(push(' '))
    setTimeout(() => {
      router.push(href)
    }, typing ? INTERACTION_TIME : INTERACTION_TIME_SHORT);
    setTimeout(() => {
      if (pathname.split('/').join('') === href.split('/').join('')) {
        document.body.classList.remove(NAVIGATING_CLASS)
        dispatch(push(' '))
        console.warn('3s経ってもパスが変わらなかったため強制的に Navigation が終了しました。')
      }
    }, 3000);
  }
  return { clickEvent }
}
