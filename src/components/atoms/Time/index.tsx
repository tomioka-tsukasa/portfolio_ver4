import { format } from 'date-fns/fp';

type UpdateTime = string
type Props = {
  timezone: UpdateTime,
  frmt?: {
    name: string,
    id: string,
  }
}
type Format = (
  frmt: string,
  timezone: string
) => string

export default function Time({
  timezone,
  frmt = {
    name: 'yyyy年MM月dd日',
    id: 'yyyy-MM-dd'
  }
}: Props ) {
  const formatDate: Format = (
    frmt,
    timezone
  ) => {
    return format(frmt)(new Date(timezone))
  }
  return <>
    <time dateTime={formatDate(frmt.id, timezone)}>
      {formatDate(frmt.name, timezone)}
    </time>
  </>
}
