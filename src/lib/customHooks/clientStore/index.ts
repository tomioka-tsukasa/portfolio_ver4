import { useAppDispatch, useAppSelector } from '@/lib/store/hook';
import { push } from '@/lib/store/slice/clientObject';
import { useEffect } from 'react';

// const useClientStore = () => {
//   const dispatch = useAppDispatch()
//   const state = useAppSelector( state => state.clientObject )
//   useEffect(() => {
//     dispatch(
//       push([
//         {
//           key: 'location',
//           value: {
//             origin: window.location.origin
//           }
//         }
//       ])
//     )
//   }, [state])
//   return state;
// }

// export { useClientStore }
