import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { getPostsData } from "@/lib/post";
import styles from "../styles/Home.module.css";
import utilstyle from '../styles/utils.module.css';
import { siteTitle } from "@/components/Layout";


//SSGの場合
export async function getStaticProps(){
  const allPostsData=getPostsData();
  console.log(allPostsData);

  return{
    props:{
      allPostsData,
    },
  }
}




export default function Home({allPostsData}) {
  return (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilstyle.headingMd}>
      <p>私はフルスタックエンジニアです。Udemy講師として活動しています。好きな言語はJavascriptです。</p>
    </section>

    <section>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id,title,date,thumbnail})=>(
       <article key={id}>
         <Link href={`/posts/${id}`}>
          <img 
            src={`${thumbnail}`}
            className={styles.thumbnailImage}
          />
         </Link>
         <Link href={`/posts/${id}`}>
          <a className={utilstyle.boldText}>{title}</a>
          </Link>
         <br/>
        <small className={utilstyle.lightText}>{date}</small>
        </article>

        ))}
       
      </div>
    </section>
    
  </Layout>
  )
}
