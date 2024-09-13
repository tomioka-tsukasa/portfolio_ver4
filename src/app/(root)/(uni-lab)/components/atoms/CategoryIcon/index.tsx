import { Svg } from "@/types/global";

type Color = 'white';
type Props = Svg<Color>

export default function CategoryIcon({
  type,
  stroke,
  fill = 'white',
  className
}: Props ) {
  return <>
    <div className={className?.arrow}>
      <svg className={className?.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <circle stroke={stroke} fill={fill} className={className?.path} cx="48" cy="64" r="48"></circle>
        <rect stroke={stroke} fill={fill} className={className?.path} x="160" y="16" width="352" height="96"></rect>
        <circle stroke={stroke} fill={fill} className={className?.path} cx="48" cy="256" r="48"></circle>
        <rect stroke={stroke} fill={fill} className={className?.path} x="160" y="208" width="352" height="96"></rect>
        <circle stroke={stroke} fill={fill} className={className?.path} cx="48" cy="448" r="48"></circle>
        <rect stroke={stroke} fill={fill} className={className?.path} x="160" y="400" width="352" height="96"></rect>
      </svg>
    </div>
  </>
}
