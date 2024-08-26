import { Svg } from "@/types/global";

type Color = '' | 'white' | 'black' | 'link';
type Props = Svg<Color>

export default function ExternalLink({
  type,
  stroke = '',
  fill = 'white',
  className
}: Props ) {
  const setColor = (color: string) => {
    switch(color) {
      case 'link':
        return '#1a73e8'
    }
  }
  return <>
    <div className={className?.root}>
      <svg width="512" height="510" viewBox="0 0 512 510" xmlns="http://www.w3.org/2000/svg">
        <path fill={setColor(fill)} stroke={setColor(stroke)} d="M62.5 38H255C263.8 38 266 44 266 47V91C266 98.2 258.667 99.3333 255 99H75C63 99 61.3333 108.333 62 113V436C62 443.2 68.5 445 75 445H403C407.5 445 412 441 412 436V267C412 256.6 418.667 255.333 422 256H464C474 256 474 263.5 474 267V445C474 486.6 435.5 510 412 510H62C16.4 510 0 460 0 436V104C0 64 34.5 38 62.5 38Z"/>
        <path fill={setColor(fill)} stroke={setColor(stroke)} d="M404.501 62L216.501 250.5C212.5 254.5 213.501 262.5 216.501 265.5L247.501 296.5C250.701 299.7 256 299.001 261.001 294C266.201 288.8 389.168 167.5 450.001 107.5V159C450.001 165 455 169 460.001 169H504.501C510.501 169 511.501 164 511.501 159V9C511.501 2.2 507 0 501.501 0H350.001C342.401 0 341.501 4 341.501 9V52.5C341.501 58.9 346 62 352.501 62H404.501Z"/>
      </svg>
    </div>
  </>
}
