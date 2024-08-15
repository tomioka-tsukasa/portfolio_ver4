'use client'

import { useAppDispatch } from "@/lib/store/hook";
import { increment } from "@/lib/store/slice/counter"
import Counted from "./components/Counted/Counted";

export default function Redux() {

  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(increment())
  }
  return <>
    <button onClick={clickHandler}>
      increment!
    </button>
  </>
}
