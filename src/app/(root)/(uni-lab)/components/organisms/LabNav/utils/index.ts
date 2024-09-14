
type IsMatchGroup = (
  subject: Newt.LabSubject,
  group: Newt.LabGroup
) => boolean

const isMatchGroup: IsMatchGroup = (
  subject,
  group,
) => subject.groups?.[0]?.slug === group.slug

type IsNoGroup = (
  subject: Newt.LabSubject,
) => boolean

const isNoGroup: IsNoGroup = (
  subject,
) => !subject.groups || !subject.groups?.length

export { isMatchGroup, isNoGroup }
