'use client'

import { useChangeContext, useStateContext } from "../../../store"
import { artists } from "../../../store/artists"
import ListName from "../../atoms/ListName"
import ListStyle from "../../atoms/ListStyle"
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
        <ListStyle active={status.active === artist.id} />
        <ListName text={artist.name} active={status.active === artist.id} />
      </a>)}
    </div>
  </>
}
