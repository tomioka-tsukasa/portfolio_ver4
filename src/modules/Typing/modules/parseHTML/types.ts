export type ParseHTML = (
  type: string
) => Array<Segment>

export type Segment = {
  type: 'tag' | 'text';
  content: Array<string>;
  startTag?: string;
  endTag?: string;
  id?: string;
}
