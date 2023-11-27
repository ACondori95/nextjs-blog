import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          👋 Hey there! I'm Alvaro, a budding programmer with a foundation in
          computer science from Brigham Young University (BYU). Currently honing
          my skills through hands-on experience and fueled by a passion for
          coding, I've embarked on a journey of self-discovery and innovation.
          My college education laid the groundwork, and my personal projects
          have been the playground where I bring ideas to life.
        </p>

        <p>
          From crafting efficient algorithms to building sleek applications, I
          love the art and science of programming. Join me as I share insights
          from my college journey, lessons from personal projects, and a glimpse
          into the dynamic world of coding. Whether you're a fellow enthusiast
          or a curious explorer, let's connect, learn, and grow together in the
          vast landscape of technology.
        </p>

        <p>
          Ready to dive into the world of possibilities? Let's code our way
          through this adventure!
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
