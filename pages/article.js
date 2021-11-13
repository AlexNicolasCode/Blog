import Head from 'next/head';

import style from '../styles/Article.module.css';

export default function Article() {
 return (
    <div className={style.page}>
      <Head>
        <title>Article Name - Blog</title>
        <meta name="description" content="Blog criado por Alex Nicolas para agregar artigos, links e conteúdos relevantes sobre programação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.page__main}> 
        <div className={style.page__page_color} />

        <section className={style.article__content}>
            <article className={style.article__head_content}>
                <p className={style.article__published_at}>01 Dez, 2035</p>
                <h1 className={style.article__title}>Introdução ao CSS</h1>
                <p className={style.article__tags}>CSS - HTML - JavaScript</p>
            </article>

            <article className={style.article__text}>
                <p className={style.article__paragraph}>
                    Conhecer bem a base front-end com certeza é uma tarefa bem complicada para quem está 
                    começando a programar. Entre HTML, CSS e JavaScript, hoje quero trazer um conteúdo mais 
                    voltado para estilização da página.
                </p>
                <p className={style.article__paragraph}>
                    Conhecer bem a base front-end com certeza é uma tarefa bem complicada para quem está 
                    começando a programar. Entre HTML, CSS e JavaScript, hoje quero trazer um conteúdo mais 
                    voltado para estilização da página.
                </p>
                <p className={style.article__paragraph}>
                    Conhecer bem a base front-end com certeza é uma tarefa bem complicada para quem está 
                    começando a programar. Entre HTML, CSS e JavaScript, hoje quero trazer um conteúdo mais 
                    voltado para estilização da página.
                </p>
            </article>

            <h2 className={style.article__topic}>O que é CSS?</h2>

            <article className={style.article__text}>
                <p className={style.article__paragraph}>
                    Conhecer bem a base front-end com certeza é uma tarefa bem complicada para quem está 
                    começando a programar. Entre HTML, CSS e JavaScript, hoje quero trazer um conteúdo mais 
                    voltado para estilização da página.
                </p>
            </article>
        </section>
      </main>
    </div>
  )
}