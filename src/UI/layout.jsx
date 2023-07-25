import { motion } from "framer-motion";

import Head from "next/head";
import Header from "./sections/header";
import Footer from "./sections/footer";

export default function Layout({ children, router }) {
  return (
    <>
      <Head>
        <title>CodingJustin</title>
        <meta
          name="description"
          content="Need a problem solver? I am passionate in this field and I have the talent to back it up with experience in headless cms, front end development, and design. I am a natural one man team but I can also thrive in collaborative settings. Learn more about me or just get to the projects."
        />
        <link
          rel="icon"
          href="/favicons/favicon.ico"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="description"
          content="Justin's Portfolio Site"
        />
        <meta
          name="author"
          content="Justin Garcia"
        />
        <meta
          name="author"
          content="CodingJustin"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple-touch-icon.png"
        />
        <meta
          property="og:site_name"
          content="Justin Garcia"
        />
        <meta
          name="og:title"
          content="Justin Garcia"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:image"
          content="/images/me.jpg"
        />
      </Head>
      <main className={`flex flex-col min-h-screen bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary`}>
        <Header path={router.asPath} />
        <motion.main
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1, staggerChildren: 0.5 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
        <Footer />
      </main>
    </>
  );
}
