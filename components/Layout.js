import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ darkModeActive, children }) {
  const title = "Home / Forthright";
  const description =
    "Helping companies, teams, and individuals create better developer experiences.";

  return (
    <div className={`${darkModeActive && "dark"} app`}>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@theworstdev" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
