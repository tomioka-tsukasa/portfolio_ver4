'use client'

import { useChangeContext, useStateContext } from "../../../store"
import { artists } from "../../../store/artists"
import styles from "./_index.module.scss"

export default function ArtistList() {
  const status = useStateContext()
  const setActive = useChangeContext()
  const enterHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = event.target as HTMLAnchorElement
    if (!target.dataset.artistId) return
    setActive({
      active: target.dataset.artistId
    })
  }
  const leaveHandler = () => {
    setActive({
      active: ' '
    })
  }
  return <>
    <div className={`${styles.root}`}> 
      {artists.map( artist => <a 
        href="" 
        className={`${styles.item}`} 
        onMouseEnter={enterHandler} 
        onMouseLeave={leaveHandler}
        data-artist-id={artist.id}
        key={artist.id}
      >
        <span className={`${styles.listStyle} ${status.active === artist.id ? styles.listStyleIsActive : ''}`}></span>
        <span className={`${styles.name} ${status.active === artist.id ? styles.nameIsActive : ''}`}>
          {artist.name}
        </span>
      </a>)}
    </div>
  </>
}
