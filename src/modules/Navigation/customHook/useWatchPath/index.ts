import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { NAVIGATING_CLASS } from "../../const"

export const useWatchPath = () => {
  const pathname = usePathname()
  useEffect(() => {
    document.body.classList.remove(NAVIGATING_CLASS)
  }, [pathname])
}
