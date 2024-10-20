import { Segment } from "../../../../modules/parseHTML/types";

export type TypeSegments = (
  segments: Array<Segment>,
  target: HTMLElement | null,
  store: Record<string, any>
) => boolean