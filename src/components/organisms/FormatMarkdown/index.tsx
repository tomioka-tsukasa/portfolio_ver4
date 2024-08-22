'use client'

import parse, { attributesToProps, DOMNode, domToReact } from 'html-react-parser';
import { HTMLReactParserOptions, Element } from 'html-react-parser';
import React from 'react';
import base from "./styles/_base.module.scss"
import code from "./styles/_code.module.scss"
import lightMode from "./styles/_lightMode.module.scss"
import ExternalLink from '¥/public/icons/icon-external-link.svg';
import Image from 'next/image';
import useNavigationAction from '@/lib/customHooks/useNavigationAction';
import injectCodePrettify from '@/lib/utils/injectCodePrettify';

type Props = {
  body: string,
  mode?: 'light' | 'dark'
}

export default function FormatMarkdown({
  body,
  mode
}: Props ) {
  useNavigationAction({
    callback: () => {
      injectCodePrettify()
    }
  })
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (!(domNode instanceof Element)) return;
      if (domNode.name === 'ul') {
        return <ul className={base.ul}>
          {domToReact(domNode.children as DOMNode[], options)}
        </ul>
      }
      if (domNode.name === 'ol') {
        return <ol className={base.ol}>
          {domToReact(domNode.children as DOMNode[], options)}
        </ol>
      }
      if (domNode.name === 'table') {
        return <div className={base.table}>
          <table>
            {domToReact(domNode.children as DOMNode[], options)}
          </table>
        </div>
      }
      if (domNode.name === 'a' && domNode.attribs.href.includes('http')) {
        const props = attributesToProps(domNode.attribs);
        return <a {...props} className={`${base.externalLink}`}>
          {domToReact(domNode.children as DOMNode[], options)}
          <Image 
            className={base.externalIcon}
            src={ExternalLink.src}
            alt=''
            width='0'
            height='0'
          />
        </a>
      }
      if (domNode.name === 'code') {
        return <code className={`${code.code}`}>
          {domToReact(domNode.children as DOMNode[], options)}
        </code>
      }
      if (domNode.name === 'pre') {
        return <pre className={`${code.pre} prettyprint linenums`}>
          {domToReact(domNode.children as DOMNode[], options)}
        </pre>
      }
    },
  };
  return <div className={`${base.root} ${mode === 'light' ? lightMode.root : ''}`}>
    {parse(body, options)}
  </div>
}
