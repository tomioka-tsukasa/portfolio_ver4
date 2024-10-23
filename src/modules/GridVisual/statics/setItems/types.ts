import { Layout, Option } from "../../types";

export type SetItems = (
  container: HTMLElement | null,
  layout: Layout,
  option?: Option
) => boolean
