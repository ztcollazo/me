import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';

export default function markdown(mdString: string): string {
  return unified()
    .use(remarkParse)
    .use(remarkGemoji)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(mdString)
    .toString();
}
