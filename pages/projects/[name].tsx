/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { HiOutlineExternalLink } from '@react-icons/all-files/hi/HiOutlineExternalLink';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkGemoji from 'remark-gemoji';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';
import { FC, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Topic from '@/components/Topic';
import { getProject } from '@/utils/github';
import nameFor from '@/utils/name-for';
// @ts-ignore
import resources from '@/resources/projects';

const findImage = (href: string, repo: string = 'ztcollazo', owner: string = 'ztcollazo'): string => {
  if ((!href.startsWith('https://') && !href.startsWith('http://') && !href.startsWith('//')) || href.startsWith('./')) {
    return `https://github.com/${owner}/${repo}/raw/main/${href}`;
  }
  return href;
};

const MdImage: FC<{
  imageProps: any,
  repo: string,
  owner: string
}> = ({
  imageProps,
  repo,
  owner,
}) => {
  const imageRef = useRef(null);
  const {
    width, height, style, alt, src, ...props
  } = imageProps;

  useEffect(() => {
    imageRef.current.setAttribute('style', 'position: static !important;');
  }, [imageRef]);

  return (
    <a className="inline-block" target="_blank" rel="noopener noreferrer" href={findImage(src, repo, owner).replace(/\/raw\//i, '/blob/')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imageRef}
        src={findImage(src, repo, owner)}
        {...(
              // eslint-disable-next-line no-nested-ternary
              width || height
                ? { width, height }
                : style?.width || style?.height
                  ? { width: style.width, height: style.height }
                  : { layout: 'fill', objectFit: 'contain' }
            )}
        alt={alt}
        {...props}
      />

    </a>
  );
};

const Project = ({ project, error }) => {
  const md = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      <Head>
        <title>
          {nameFor(project?.name || 'Error')}
          {' '}
          | Zachary Collazo
        </title>
      </Head>
      {!error ? (
        <main className="flex flex-col min-h-[77vh] bottom-0 top-0 mb-16 md:pb-0 flex-wrap flex-1 p-8 md:p-16 font-mono">
          <h1 className="font-bold text-3xl text-center md:text-8xl mb-8 sm:text-5xl">{nameFor(project.name)}</h1>
          <div style={{ gridTemplateColumns: '75% 25%' }} className="md:grid flex flex-col-reverse m-auto md:m-[initial]">
            <div>
              <ReactMarkdown
                className="m-2"
                components={{
                  a: ({
                    node, href, children, ...props
                  }) => <a href={href} target="_blank" rel="noopener noreferrer" className="dark:text-blue-400 lg:text-left text-left md:text-center hover:underline text-blue-600" {...props}>{children}</a>,
                }}
              >
                {Buffer.from(resources[project.name], 'base64').toString()}
              </ReactMarkdown>
              {md ? project.readme && (
              <div className="font-sans mt-4 border-[1px] dark:border-gray-300 border-gray-500 rounded-lg md:p-4 m-auto md:m-[initial]">
                <a target="_blank" rel="noopener noreferrer" href={project.readme.url}><h4 className="text-lg hover:underline mb-4 dark:text-gray-300">Project Readme</h4></a>
                <hr className="dark:opacity-40 opacity-70 -mx-4" />
                <ReactMarkdown
                  rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize]}
                  remarkPlugins={[remarkGfm, remarkGemoji]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <>
                        <h1 className="text-3xl my-2" {...props} />
                        <hr className="my-2 opacity-40" />
                      </>
                    ),
                    h2: ({ node, ...props }) => (
                      <>
                        <h2 className="text-2xl my-2" {...props} />
                        <hr className="my-2 opacity-40" />
                      </>
                    ),
                    h3: ({ node, ...props }) => <h3 className="text-xl" {...props} />,
                    h4: ({ node, ...props }) => <h4 className="text-lg" {...props} />,
                    code: ({ node, ...props }) => <span className="whitespace-pre-wrap"><code {...props} className="font-mono p-1 px-2 rounded-md bg-gray-400 bg-opacity-50" /></span>,
                    ol: ({ node, ...props }) => <ol className="px-6 list-[number] list-inside" {...props} />,
                    ul: ({ node, ...props }) => <ul className="px-6 list-disc list-inside" {...props} />,
                    li: ({ node, ...props }) => <li className="my-2" {...props} />,
                    p: ({ node, ...props }) => <p className="my-3" {...props} />,
                    pre: ({ node, ...props }) => <pre className="p-2 px-4 bg-opacity-50 rounded-md bg-gray-400" {...props} />,
                    img: ({ node, ...props }) => (
                      <MdImage
                        imageProps={props}
                        owner={project.owner.name}
                        repo={project.name}
                      />
                    ),
                    a: ({
                      node, href, children, ...props
                    }) => <a href={href} target="_blank" rel="noopener noreferrer" className="dark:text-blue-400 hover:underline text-blue-600" {...props}>{children}</a>,
                  }}
                >
                  {project.readme.text}
                </ReactMarkdown>
              </div>
              ) : <a target="_blank" rel="noreferrer noopener" className="font-bold m-2 inline-block p-2" href={`${project.url}#readme`}>View Readme</a>}
            </div>
            <div className="h-full">
              <div className="flex top-0 w-full justify-start m-auto md:mx-4 left-0 flex-col">
                <div className="flex flex-row justify-around">
                  {project.homepageUrl && <a target="_blank" rel="noopener noreferrer" aria-label="Open page" className="m-auto" href={project.homepageUrl}><HiOutlineExternalLink size={24} /></a>}
                  {!project.isPrivate && <a target="_blank" rel="noopener noreferrer" aria-label="Open github repository" className="m-auto" href={project.url}><FaGithub size={24} /></a>}
                </div>
                <p className="mx-auto my-4">{project.description}</p>
                <div className="flex flex-wrap flex-row flex-1 justify-center md:justify-start">
                  {project.topics.map((t) => <Topic key={t.name} topic={t} />)}
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : <div>{error}</div>}
    </>
  );
};
export const getServerSideProps = async (context: any) => {
  try {
    const project = await getProject(context.params.name, context.params.name === 'destination-app' ? 'ericcecchi' : 'ztcollazo');

    return {
      props: {
        project,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        project: null,
        error: error.toString(),
      },
    };
  }
};

export default Project;
