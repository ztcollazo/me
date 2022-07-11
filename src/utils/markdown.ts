import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import hbs from 'highlight.js/lib/languages/handlebars';

export default function markdown(mdString: string): string {
  return unified()
    .use(remarkParse)
    .use(remarkGemoji)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, {
      languages: {
        hbs,
      },
    })
    .use(rehypeRaw)
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        span: [
          ...(defaultSchema.attributes.span ?? []),
          'className',
          'hljs-addition',
          'hljs-attr',
          'hljs-attribute',
          'hljs-built_in',
          'hljs-bullet',
          'hljs-char',
          'hljs-code',
          'hljs-comment',
          'hljs-deletion',
          'hljs-doctag',
          'hljs-emphasis',
          'hljs-formula',
          'hljs-keyword',
          'hljs-link',
          'hljs-literal',
          'hljs-meta',
          'hljs-name',
          'hljs-number',
          'hljs-operator',
          'hljs-params',
          'hljs-property',
          'hljs-punctuation',
          'hljs-quote',
          'hljs-regexp',
          'hljs-section',
          'hljs-selector-attr',
          'hljs-selector-class',
          'hljs-selector-id',
          'hljs-selector-pseudo',
          'hljs-selector-tag',
          'hljs-string',
          'hljs-strong',
          'hljs-subst',
          'hljs-symbol',
          'hljs-tag',
          'hljs-template-tag',
          'hljs-template-variable',
          'hljs-title',
          'hljs-type',
          'hljs-variable'
        ]
      }
    })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(mdString)
    .toString();
}
