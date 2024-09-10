import Image from "next/image"
import styles from "./_index.module.scss"
import icon from "¥/public/icons/icon-github-logo.svg"

type Props = {
  href?: string
}

export default function GithubIcon({
  href = 'https://github.com/tomioka-tsukasa/portfolio_ver4'
}: Props ) {
  return <>
    <a href={href} className={styles.root} target={href.includes('http') ? '_blank' : undefined}>
      <Image
        src={icon}
        alt=""
      />
    </a>
  </>
}
