'use client'

import useImportLab from "@/lib/customHooks/useImportLab"
import styles from "./_index.module.scss"

type Props = {
  slug: string,
  groups: Array<Newt.LabGroup> | undefined
}

export default function LabScreen({
  slug,
  groups
}: Props ) {
  useImportLab({slug, groups})
  return <>
    <article className={styles.root} id="lab-screen">
      <div className={styles.loading} id="loading">
        Now Loading...
      </div>
    </article>
  </>
}
