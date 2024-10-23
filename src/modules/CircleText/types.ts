export type CircleText = (
  container: HTMLElement | null,
  char: string, 
  option?: Option,
) => HTMLElement | null

export type Option = {
  radius?: number,
  fontSpace?: number,
  background?: boolean,
  backgroundColor?: string,
  backgroundStyle?: string,
}
