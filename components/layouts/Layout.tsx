import Head from "next/head";
import React, { FC } from "react";
import { NavBar } from "../ui";


type Props = {
    children?: React.ReactNode;
    title?: string;
  };

  export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title ? title : undefined} </title>
        <meta name="author" content="Jesus García" />
        <meta name="description" content="Poke app information" />
        <meta name="keywords" content="XXX, pokemon, pokedex" />
      </Head>
      <NavBar />
      <main style={{margin: '10px'}}>{children}</main>
    </>
  );
};

