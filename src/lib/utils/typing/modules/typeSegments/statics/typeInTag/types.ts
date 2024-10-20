import { Store } from "@/lib/utils/typing/types";
import { Ctrl } from "../../types";

export type TypeInTag = (
  target: HTMLElement | null,
  ctrl: Ctrl,
  store: Store
) => void

export type Common = (
  tagElement: HTMLElement | null,
  ctrl: Ctrl,
  store: Store
) => boolean
