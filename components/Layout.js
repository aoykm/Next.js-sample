import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilstyles from "../styles/utils.module.css"



const name="Shin Code";
export const siteTitle="Next.js blog";

function Layout({children, home}){
    return(
        <div className={styles.container}>
        <Head>
            <Link rel="icon" href="/favicon.ico"/>
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                 <img sec="/images/profile.png" className={utilstyles.borderCircle}/>
                 <h1 className={`${utilstyles.heading2Xl} ${styles.headerHomeImage}`}>{name}</h1>
                </>
            ):(
                <>
                 <img sec="/images/profile.png" className={utilstyles.borderCircle}/>
                 <h1 className={`${utilstyles.heading2Xl}`}>{name}</h1>
                </>
            )}
           
        </header>
        <main>{children}</main>
        {!home&&(
            <div>
                <Link href="/">← ホームへ戻る</Link>
            </div>
        )}
    </div>
    );
}

export default Layout;