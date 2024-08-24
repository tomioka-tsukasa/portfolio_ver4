namespace Unilab {
  export interface Navs {
    global: Array<{
      name: string,
      slug: string
    }>,
    local: Array<{
      name?: string,
      slug: string,
      href: string,
      icon?: React.ReactNode
    }>
  }
}
