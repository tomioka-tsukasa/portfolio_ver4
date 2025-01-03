import { useEffect, useReducer } from "react"

type Props = {
  slug: string,
  groups: Array<Newt.LabGroup> | undefined
}

type InitialState = {
  loaded: boolean
}

export default function useImportLab ({
  slug,
  groups
}: Props) {
  const reducer = (state: InitialState) => {
    return {
      loaded: true
    }
  }
  const initialState: InitialState = {
    loaded: false
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    async function getDocument(slug: string) {
      const url = `${window.location.origin}/lab/${groups?.length ? `${groups[0].slug}/` : ''}${slug}/`
      const screen = document.querySelector('#lab-screen')
      const loading = document.querySelector('#loading')
      try {
        const res = await fetch(url)
        if (!res.ok) {
          switch (res.status) {
            case 400:
              throw new Error('400 error');
            case 401:
              throw new Error('401 error');
            case 404:
              throw new Error('404 error');
            case 500:
              throw new Error('500 error');
            default:
              throw new Error('something error');
          }
        }
        if (!state.loaded) {
          const htmlString = await res.text()
          const doc = new window.DOMParser().parseFromString(htmlString, "text/html")
          const iframe = document.createElement('iframe')
          iframe.src = url
          iframe.width = screen?.clientWidth + 'px'
          iframe.height = screen?.clientHeight+ 'px'
          iframe.style.border = 'none';
          screen?.appendChild(iframe)
          dispatch()
          console.log(doc)
        }
      } catch(err) {
        loading && (loading.innerHTML = 'Error - check console log.')
        console.error(
          'iframeの読み込みに失敗しました。\`/src/app/lab\`に現在のURL末尾のスラッグと同じディレクトリを設置してください。\n',
          `Url: ${url}\n`,
          `Groups: `, groups, '\n',
          err);
      }
    }
    getDocument(slug);
  }, [state, slug, groups])
}
