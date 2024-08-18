'use client'

import useImportLab from "@/lib/customHooks/useImportLab"
import styles from "./_index.module.scss"

type Props = {
  slug: string
}

export default function LabScreen({
  slug
}: Props ) {
  useImportLab({slug})
  return <>
    <div className={styles.root} id="lab-screen">
    </div>
  </>
}
