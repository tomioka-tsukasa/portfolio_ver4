'use client'

import commonStyles from "../_common.module.scss"
import ModalArea from "./components/ModalArea"
import Provider from "./store"

export default function ReactModuleModal() {
  return <>
    <Provider>
      <div className={commonStyles.root}>
        <ModalArea />
      </div>
    </Provider>
  </>
}
