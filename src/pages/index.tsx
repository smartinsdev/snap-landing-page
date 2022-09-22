import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { OpenMenuProvider } from "../providers/OpenMenuProvider";

const Home: NextPage = () => {
  return (
    <OpenMenuProvider>
      <Head>
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
        <meta
          name="description"
          content="This is a solution to the Intro section with dropdown navigation challenge on Frontend Mentor"
        />
      </Head>
      <Header />
      <Hero />
    </OpenMenuProvider>
  );
};

export default Home;
