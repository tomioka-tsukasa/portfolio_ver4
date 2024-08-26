import { Svg } from "@/types/global";

type Color = 'white' | 'black';
type Props = Svg<Color>

export default function Arrow({
  type,
  stroke,
  fill = 'white',
  className
}: Props ) {
  return <>
    <div className={className?.arrow}>
      <svg className={className?.svg} width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M9 7.50022L0.75 14.613L0.75 0.387458L9 7.50022Z"
          stroke={stroke}
          fill={fill}
          className={className?.path}
        />
      </svg>
    </div>
  </>
}
