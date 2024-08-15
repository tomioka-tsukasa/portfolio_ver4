import React from "react";

export default function ModalWork({
    children,
    data 
  }: { 
    children: React.ReactNode
    data: {
      slug: string,
      title: string,
      description: string
    } 
  }) {
  return <div className="ModalWork">
    <h1>
      {data.slug}
    </h1>
    <p>
      Title: {data.title}
    </p>
    <p>
      Description: {data.description}
    </p>
    {children}
  </div>
}
