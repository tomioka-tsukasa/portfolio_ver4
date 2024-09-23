'use client'

import styles from "./_index.module.scss"
import Image from "next/image"
import { useStateContext } from "../../../store"
import { artists } from "../../../store/artists"

export default function Items() {
  const status = useStateContext()
  return <>
    <div className={`${styles.root}`}> 
      {artists.map( artist => <div 
        className={`${styles.item} ${status.active === artist.id ? styles.isActive : ''}`}
        key={artist.id}
      >
        <Image 
          src={artist.image}
          alt=''
        />
      </div>)}
    </div>
  </>
}
