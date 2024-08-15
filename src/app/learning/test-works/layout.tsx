import Link from "next/link";
import React from "react";
import worksData from "@/data/works.json"

export default function Works({ 
  children 
}: {
  children: React.ReactNode
}) {
  return <>
    {children}
    <ul>
      {worksData.map( work => {
        return <li key={work.slug}>
          <Link href={`${work.slug}`}>
            {work.title}
          </Link>
        </li>
      })}
    </ul>
  </>
}
