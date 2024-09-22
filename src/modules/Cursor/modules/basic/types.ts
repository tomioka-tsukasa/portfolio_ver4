export type CursorOption = {
  bodyName: string,
  duration: number,
}

export type ProxySet = (
  target: Record<string, any>,
  property: keyof Record<string, any>,
  value: string,
  receiver: any
) => boolean;

export type ProxyHandler = (
  
)
