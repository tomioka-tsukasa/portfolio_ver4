import Link from "next/link"
import styles from "./_index.module.scss"

type Props = {
  navs: UniLab.LocalNav
}

export default function ULNav({
  navs
}: Props ) {
  return <>
    <div className={styles.root}>
      {navs.map( nav => {
        let target: string = ''
        nav.href.includes('http') ? target = '_blank' : ''
        return <Link href={nav.href} key={nav.slug} target={target}>{nav.icon ?? nav.name}</Link> 
      })}
    </div>
  </>
}
