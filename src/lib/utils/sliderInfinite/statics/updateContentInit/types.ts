import { Ctrl, Doms, Progress } from "../../types"

export type UpdateContentInit = (
  doms: Doms,
  ctrl: Ctrl | undefined
) => {
  inAnimate: (
    progress: Progress
  ) => Progress
}
