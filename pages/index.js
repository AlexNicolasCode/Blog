import Head from 'next/head';
import Image from 'next/image';

import style from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={style.home}>
      <Head>
        <title>Alex Nicolas - Blog</title>
        <meta name="description" content="Blog criado por Alex Nicolas para agregar artigos, links e conteúdos relevantes sobre programação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.home__main}>
        <section className={style.presentation}>
          <div className={style.presentation__photo_container}>
            <Image 
              className={style.presentation__img}
              src="/photo.jpg" 
              alt="Alex Nicolas foto"
              width={100}
              height={100}
            />
          </div>

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

            <ul className={style.presentation__social}>
              <li className={style.presentation__brand}>
                <Image src="/twitter-brands.svg" alt="" width={25} height={25}/>
              </li>
              <li className={style.presentation__brand}>
                <Image src="/dev-brands.svg" alt="" width={25} height={25}/>
              </li>
              <li className={style.presentation__brand}>
                <Image src="/linkedin-brands.svg" alt="" width={25} height={25}/>
              </li>
            </ul>
          </article>
        </section>

        <section className={style.last_articles}>
            <h2 className={style.last_articles__title}>Last Articles</h2>

            <ul className={style.last_articles__list}>
              <li className={style.article}>
                <span className={style.article__published_at}>01 Dez, 2021</span>
                <h3 className={style.article__title}>Introdução ao CSS</h3>
                <p className={style.article__description}>
                  dasldkadlkasld dsalk dasldkadlkasld dsalkdasldkadlkasld 
                  dsalk dasldkadlkasld dsalk dasldkadlkasld dsalk dasldkadlkasld 
                  dsalkdasldkadlkasld dsalk dasldkadlkasld dsalk dasldkadlkasld dsalk 
                  dasldkadlkasld dsalk dasldkadlkasld dsalk
                </p>
                <p className={style.article__tags}>CSS, HTML, Frontend</p>
              </li>
              
              <li className={style.article}>
                <span className={style.article__published_at}>01 Dez, 2021</span>
                <h3 className={style.article__title}>Introdução ao CSS</h3>
                <p className={style.article__description}>
                  dasldkadlkasld dsalk dasldkadlkasld dsalkdasldkadlkasld 
                  dsalk dasldkadlkasld dsalk dasldkadlkasld dsalk dasldkadlkasld 
                  dsalkdasldkadlkasld dsalk dasldkadlkasld dsalk dasldkadlkasld dsalk 
                  dasldkadlkasld dsalk dasldkadlkasld dsalk
                </p>
                <p className={style.article__tags}>CSS, HTML, Frontend</p>
              </li>
            </ul>
          </section>  
      </main>
    </div>
  )
}