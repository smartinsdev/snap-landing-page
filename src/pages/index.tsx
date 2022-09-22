import { useContext, useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { OpenMenuContext } from "../contexts/OpenMenuContext";
import { Overlay } from "../components/Overlay";

const Home: NextPage = () => {
  const context = useContext(OpenMenuContext);

  useEffect(() => {
    if (context?.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [context?.isOpen]);
  return (
    <>
      <Head>
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
        <meta
          name="description"
          content="This is a solution to the Intro section with dropdown navigation challenge on Frontend Mentor"
        />
      </Head>
      <Header />
      {context?.isOpen && <Overlay />}
      <Hero />
    </>
  );
};

export default Home;
