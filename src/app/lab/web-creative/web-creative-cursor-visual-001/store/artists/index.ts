import { StaticImageData } from "next/image"
import artist001 from "¥/public/lab/web-creative/web-creative-cursor-visual-001/assets/imgs/artist-001.jpg"
import artist002 from "¥/public/lab/web-creative/web-creative-cursor-visual-001/assets/imgs/artist-002.jpg"
import artist003 from "¥/public/lab/web-creative/web-creative-cursor-visual-001/assets/imgs/artist-003.jpg"

interface Member {
  id: string,
  name: string,
  image: StaticImageData,
}

const artists: Array<Member> = [
  {
    id: '001',
    name: 'Lana Knightley',
    image: artist001,
  },
  {
    id: '002',
    name: 'Miles Donovan',
    image: artist002,
  },
  {
    id: '003',
    name: 'Eleanor Whitmore',
    image: artist003,
  },
]

export { artists }
