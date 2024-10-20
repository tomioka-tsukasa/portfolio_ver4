import { Store } from "../../types";
import { Segment } from "../parseHTML/types";

export type TypeSegments = (
  segments: Array<Segment>,
  target: HTMLElement | null,
  store: Store
) => Segment | null

export type Ctrl = {
  char: string,
  segment: {
    current: Segment | undefined,
    index: number
  },
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
