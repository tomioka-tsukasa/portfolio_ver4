import styles from "./_index.module.scss"

type Props = {
  caption: string,
  className?: string
}

export default function Figcaption({
  caption,
  className
}: Props ) {
  return <>
    <figcaption className={`${styles.root} ${className}`}>
      {caption}
    </figcaption>
  </>
}
