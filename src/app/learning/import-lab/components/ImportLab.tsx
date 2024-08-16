'use client'

import { useEffect } from "react"
import worksData from "@/data/works.json"

export default function ImportLab() {
  useEffect(() => {
    async function getHTML(slug: string) {
      try {
        const res = await fetch(`${window.location.origin}/lab/${slug}`)
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
        const htmlString = await res.text()
        const dom = new window.DOMParser().parseFromString(htmlString, "text/html");
        console.log(dom)
      } catch(err) {
        console.error(
          '\`@/src/app/lab\`内に「Newt」のLabアプリで管理している記事が見つかりません。',
          err);
      }
    }
    worksData.forEach( work => {
      getHTML(work.slug);
    })
  }, [])
  return <>
    <h2>
      ImportLab
    </h2>
  </>
}
