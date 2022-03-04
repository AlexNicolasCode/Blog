import gql from 'graphql-tag';
import { DateTime } from 'luxon';

import { client } from '../src/services/apollo';

import style from '../styles/Home.module.css';
import { 
  FlexList, 
  CustomHead, 
  Icon, 
  Photo, 
  Article
} from '../src/components';

export default function Home({ lastArticles }) {
  return (
    <div className={style.home}>
      <CustomHead
        title={"Alex Nicolas - Blog"}
        description={"Blog criado por Alex Nicolas para agregar artigos, links e conteúdos relevantes sobre programação"}
      />

      <main className={style.home__main}>
        <section className={style.presentation}>
          <Photo />

          <article className={style.presentation__content}>
            <article className={style.presentation__headContent}>
              <h1 className={style.presentation__title}>Alex Nicolas</h1>
              <h2 className={style.presentation__subtitle}>Frontend Developer</h2>
            </article>

            <p className={style.presentation__description}>
              Desenvolvedor front-end apaixonado por tecnologia e que gosta de escrever um pouco. 
              Trabalho com JavaScript, React, React Native, Vue, NodeJS, Python e TypeScript atualmente, 
              mas também adoro descobrir novas ferramentas.
            </p>

            <FlexList>
              <Icon
                href="https://twitter.com/AlexNicolasCode"
                src="/twitter-brands.svg"
                alt="Twitter Alex Nicolas"
              />

              <Icon
                href="https://dev.to/alexnicolascode/"
                src="/dev-brands.svg" 
                alt="Dev To Alex Nicolas"
              />

              <Icon
                href="https://linkedin.com/in/nicolas-alex/"
                src="/linkedin-brands.svg" 
                alt="Linkedin Alex Nicolas"
              />

              <Icon
                href="https://github.com/alexNicolasCode/"
                src="/github-brands.svg" 
                alt="GitHub Alex Nicolas"
              />
            </FlexList>
          </article>
        </section>

        <section className={style.last_articles}>
            <h2 className={style.last_articles__title}>Last Articles</h2>

            <ul className={style.last_articles__list}>
              {lastArticles.map((article, index) => {
                return <Article article={article} key={index}/>
              })}
            </ul>
          </section>  
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await client.query({ query: gql`query {
    allArticles {
      title
      tags
      slug
      createdAt
      description
      color
    }}`,
  })

  const lastArticles = data.allArticles.map((article) => {
    return {
      title: article.title,
      tags: article.tags,
      slug: article.slug,
      createdAt: DateTime.fromISO(article.createdAt).toFormat('dd LLL, yyyy'),
      description: article.description
    }
  });

  return {
    props: {
      lastArticles
    },
    revalidate: 60 * 60 * 8
  }
} 