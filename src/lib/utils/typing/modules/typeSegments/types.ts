import { Store } from "../../types";
import { Segment } from "../parseHTML/types";

export type TypeSegments = (
  segments: Array<Segment>,
  target: HTMLElement | null,
  store: Store
) => boolean

export type Ctrl = {
  char: string,
  segment: {
    current: Segment | undefined,
    index: number
  },
}
