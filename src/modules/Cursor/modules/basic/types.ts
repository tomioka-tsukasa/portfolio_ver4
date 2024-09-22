export type BodyMember = {
  name: string,
  duration?: number,
  gap?: number,
}

export type ProxySet = (
  target: Record<string, any>,
  property: keyof Record<string, any>,
  value: string,
  receiver: any
) => boolean;
