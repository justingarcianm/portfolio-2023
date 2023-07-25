import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import Layout from "@/UI/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Layout router={router}>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}
