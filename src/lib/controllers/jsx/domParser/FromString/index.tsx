'use client'

import parse from 'html-react-parser';

export default function CtrlJsxDomParserFromString({ 
  string 
}: {
  string: string
}) {
  return <>
    {parse(string)}
  </>
}
