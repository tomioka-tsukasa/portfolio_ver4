import { Store } from "@/lib/utils/typing/types";
import { Ctrl } from "../../types";

export type TypeInTagInit = (
  target: HTMLElement | null,
  ctrl: Ctrl,
  store: Store
) => {
  typeFunc: () => void
}

export type Common = (
  tagElement: HTMLElement | null,
  ctrl: Ctrl,
  store: Store
) => boolean
