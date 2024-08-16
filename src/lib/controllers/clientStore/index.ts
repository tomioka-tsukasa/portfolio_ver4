import { useAppDispatch, useAppSelector } from '@/lib/store/hook';
import { push } from '@/lib/store/slice/clientObject';
import parse from 'html-react-parser';
import { useEffect } from 'react';

const CtrlClientStore = {
  location() {
    const dispatch = useAppDispatch()
    const state = useAppSelector( state => state.clientObject )
    useEffect(() => {
      dispatch(
        push([
          {
            key: 'location',
            value: {
              origin: window.location.origin
            }
          }
        ])
      )
    }, [])
    return state;
  }
}

export { CtrlClientStore }
