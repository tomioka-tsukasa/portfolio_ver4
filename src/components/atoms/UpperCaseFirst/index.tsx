type Props = {
  text: string
}

function factory(
  text: string
) {
  return text
    .split('')
    .map((s, i) => i === 0 ? s.toUpperCase() : s)
    .join('')
}

export default function UpperCaseFirst({
  text
}: Props ) {
  return <>
    {factory(text)}
  </>
}

export function upperCaseFirst(
  text: string
) {
  return factory(text)
}
