'use client'

import TabContent from "./components/molecules/TabContent"
import TabProvider from "./store"
import { InitialState, ListType } from "./types"

type Props = {
  list: ListType,
  initialState: InitialState,
}

export default function Tab({
  list,
  initialState
}: Props ) {
  return <>
    <TabProvider initialState={initialState}>
      <TabContent list={list} />
    </TabProvider>
  </>
}
