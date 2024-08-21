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

  export interface TabItem {
    slug: 'body' | 'dev' | 'design',
    name: '概要' | '開発メモ' | 'デザインメモ',
  }

  export type TabList = Array<TabItem>
}
