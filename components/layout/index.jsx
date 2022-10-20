import Head from "next/head";
import Footer from "../home/footer";
import NavbarPortfolio from "../navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Julian Roa 😎</title>
        <meta
          name="description"
          content="fullstack portfolio - portafolio de Julian Roa Villamil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavbarPortfolio></NavbarPortfolio>
      </header>
      <main>{children}</main>
      <style jsx>{`
        header {
        }
      `}</style>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
