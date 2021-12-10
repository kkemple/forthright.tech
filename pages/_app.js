import withDarkMode from "next-dark-mode";

import "@styles/globals.css";
import Layout from "@components/Layout";

function Application({ Component, pageProps, darkMode }) {
  const { darkModeActive } = darkMode;

  return (
    <Layout darkModeActive={darkModeActive}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default withDarkMode(Application);
