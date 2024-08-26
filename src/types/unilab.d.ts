namespace UniLab {
  export type LocalNav = Array<{
    name?: string,
    slug: string,
    href: string,
    icon?: React.ReactNode
  }>

  export type GlobalNav = Array<{
    name: string,
    slug: string
  }>
}
