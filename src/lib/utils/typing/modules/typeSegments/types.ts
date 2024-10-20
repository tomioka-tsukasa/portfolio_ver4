import { Store } from "../../types";
import { Segment } from "../parseHTML/types";

export type TypeSegments = (
  segments: Array<Segment>,
  target: HTMLElement | null,
  store: Store,
  ctrl: Ctrl
) => Segment | null

export type Ctrl = {
  char: string,
  segment: {
    current: Segment | undefined,
    index: number
  },
  isInTag: boolean,
  tagElement: HTMLElement | null,
  types: string
}

export type IsConvert = (
  store: Store
) => {
  start: (
    element: HTMLElement | null,
  ) => void,
  end: (
    element: HTMLElement | null,
  ) => void,
}
