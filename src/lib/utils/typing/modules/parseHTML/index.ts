import { ParseHTML, Segment } from "./types";

const regex = /(<[^\/>][^>]*>)([^<]*)(<\/[^>]+>)|(<[^\/>]*\/>)|([^<]+)/g
const selfTagRegex = /[^\/>][^>]*\/?>/;
let match
let index: number = 0
const segments: Array<Segment> = []

export const parseHTML: ParseHTML = (
  type
) => {
  while ((match = regex.exec(type)) !== null) {
    if (match[1] && match[2] && match[3]) {
      segments.push({
        type: 'tag',
        content: match[2].split(''),
        startTag: match[1].replace('>', ` data-typing-id="index-${index}">`),
        endTag: match[3],
        id: `index-${index}`
      })
      index++
    } else if (match[4]) {
      segments.push({
        type: 'tag',
        content: (`${match[4]}`).split(''),
        startTag: `${match[4]}`
      });
    } else if (match[5]) {
      segments.push({
        type: 'text',
        content: match[5].split(''),
      });
    }
  }
  return segments;
}
