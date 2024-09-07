import { usePathname, useRouter } from "next/navigation"
import { useWatchPath } from "../useWatchPath"
import { INTERACTION_TIME, NAVIGATING_CLASS } from "../../const"

type FunctionType = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string,
) => void

export const useClickManager = () => {
  const router = useRouter()
  const pathname = usePathname()
  useWatchPath()
  const clickEvent: FunctionType = (
    event,
    href
  ) => {
    if (pathname === href) return
    event.preventDefault()
    document.body.classList.add(NAVIGATING_CLASS)
    setTimeout(() => {
      router.push(href)
    }, INTERACTION_TIME);
  }

  return { clickEvent }
}
