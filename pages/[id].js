import gql from 'graphql-tag';
import { DateTime } from 'luxon';
import Head from 'next/head';
import { client } from '../src/services/apollo';

import style from '../styles/Article.module.css';

export default function Article({ article }) {
    return (
    <div className={style.page}>
        <Head>
        <title>{article.title} - Blog</title>
        <meta name="description" content="Blog criado por Alex Nicolas para agregar artigos, links e conteúdos relevantes sobre programação" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={style.page__main}> 
        <div className={style.page__page_color} />

        <section className={style.article}>
            <article className={style.article__content}>
                <article className={style.article__head_content}>
                    <p className={style.article__published_at}>{article.createdAt}</p>
                    <h1 className={style.article__title}>{article.title}</h1>
                    <p className={style.article__tags}>{article.tags}</p>
                </article>

                <article className={style.article__text}>
                    {article.content.map((item, index) => {
                        const htmlTags = {
                            "code": <pre className={style.article__paragraph} key={index}>
                                        <code>{item.content}</code>
                                    </pre>,
                            "p": <p className={style.article__paragraph} key={index}>{item.content}</p>,
                            "h2": <h2 className={style.article__topic} key={index}>{item.content}</h2>,
                            "h3": <h3 className={style.article__topic} key={index}>{item.content}</h3>
                        }

                        if (htmlTags[item.type]) {
                            return htmlTags[item.type]
                        }

                        if (item.type === "ul") {
                            return (
                                <ul key={index}>
                                    {item.content.map((content, index) => {
                                        return (
                                            <li key={index}>
                                                <a className={style.article__external_link} href={content.url}>{content.name}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        }
                    })}
                </article>
            </article>
        </section>
        </main>
    </div>
    )
}

export const getStaticPaths = async () => {
    const allArticles = await client.query({ query: gql`query MyQuery {
        allArticles {
          slug
        }
    }`})
    
    const paths = allArticles.data.allArticles.map((article) => {
        return {
            params: {
                id: article.slug
            },
        }
    })
    
    return { 
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (ctx) => {
    const { id } = ctx.params;
    const { data } = await client.query({ query: gql`query($slug: String!) {
        article(filter: {slug: {eq: $slug}}) {
            title
            tags
            createdAt
            readTime
            content {
                value
            }
        }}`,
        
        variables: {
            slug: id,
        }
    })
    const articleData = data.article;
    const contentData = articleData.content.value.document.children;
    const content = convertToHTMLData(contentData);

    const article = {
        createdAt: DateTime.fromISO(articleData.createdAt).toFormat('dd LLL, yyyy'),
        title: articleData.title,
        tags: articleData.tags,
        content
    }

    return {
        props: {
            article
        },
        revalidate: 60 * 60 * 8
    }
}

const convertToHTMLData = (content) => {
    return content.map((item) => {
        if (item.type === "paragraph") {
            return { type: 'p', content: item.children[0].value }
        }

        if (item.type === "heading") {
            return { type: `h${item.level}`, content: item.children[0].value }
        }

        if (item.type === "code") {
            return { type: 'code', content: item.code}
        }

        if (item.type === "list") {
            const content = item.children.map((item) => {
                const base = item.children[0].children[0];
                return { name: base.children[0].value, url: base.url  }
            })
            return { type: 'ul', content: content}
        }
    })
}