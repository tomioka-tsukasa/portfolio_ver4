export type Nav = Array<{
  name: string,
  slug: string,
  active: boolean,
}>

export interface Svg<C> {
  type?: string,
  stroke?: C,
  fill?: C,
  className?: Record<string, string>
}
