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
    <ul className={`${styles.root}`}> 
      {artists.map( artist => <li className={`${styles.item}`} key={artist.id}>
        <a 
          href="./" 
          className={styles.link}
          onMouseEnter={enterHandler} 
          onMouseLeave={leaveHandler}
          data-artist-id={artist.id}
        >
          <ListStyle active={status.active === artist.id} />
          <ListName text={artist.name} active={status.active === artist.id} />
        </a>
      </li>)}
    </ul>
  </>
}
