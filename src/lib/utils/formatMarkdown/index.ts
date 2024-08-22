import ExternalLink from "¥/public/icons/icon-external-link.svg"
import parse from 'html-react-parser';

type Props = {
  body: string,
  styles?: any
}

export default function formatMarkdown({
  body,
  styles
}: Props ) {
  body = body.replaceAll(/<pre><code class="language-(.+)"/g, '<pre class="prettyprint linenums lang-$1"><code')
  body = body.replaceAll(/lang-javascript/g, 'lang-js')
  body = body.replaceAll(/(class="(.+)" )?href="http(.*)"(.*)>(.*)<\/a>/g, `class="${styles.externalLink} $2" target="_blank" href="http$3"$4>$5<img src="${ExternalLink.src}" class="${styles.externalIcon}" /></a>`)
  body = body.replaceAll(/<table/g, `<div class=${styles.formatedTable}><table`)
  body = body.replaceAll(/<\/table>/g, '</table></div>')
  return parse(body)
}
