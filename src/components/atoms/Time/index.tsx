import { format } from 'date-fns/fp';

type UpdateTime = string
type Props = {
  timezone: UpdateTime,
  frmt?: string
}

export default function Time({
  timezone,
  frmt = 'yyyy年MM月dd日'
}: Props ) {
  const formatDate = format(frmt);
  return <>
    {formatDate(new Date(timezone))}
  </>
}
