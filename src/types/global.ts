export type Nav = {
  name: string,
  slug: string,
  active: boolean,
}

export interface Svg<C> {
  type?: string,
  stroke?: C,
  fill?: C,
  className?: Record<string, string>
}
