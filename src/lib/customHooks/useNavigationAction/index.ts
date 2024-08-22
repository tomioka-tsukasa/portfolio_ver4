import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {
  callback: () => void,
  cleanup?: () => void,
}

export default function useNavigationAction ({
  callback,
  cleanup,
}: Props ) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect( () => {
    callback()
    return cleanup
  }, [pathname, searchParams])
}
