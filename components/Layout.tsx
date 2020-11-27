import React, { Fragment, ReactElement } from "react";
import Head from "next/head";
interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: Props): ReactElement {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fragment>{children}</Fragment>
    </Fragment>
  );
}
