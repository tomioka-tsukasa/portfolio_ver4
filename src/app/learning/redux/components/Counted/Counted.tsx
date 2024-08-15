'use client'

import { useAppSelector } from "@/lib/store/hook";

export default function Counted() {
  const count = useAppSelector( (state) => state.counter.value );
  return <>
    {count}
  </>
}
