import { Store } from "../../types";
import { Segment } from "../parseHTML/types";

export type TypeSegmentsInit = (
  segments: Array<Segment>,
  target: HTMLElement | null,
  store: Store,
) => {
  typeFunc: () => Segment | null
}

export type Ctrl = {
  char: string,
  segment: {
    current: Segment | undefined,
    index: number
  }
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
