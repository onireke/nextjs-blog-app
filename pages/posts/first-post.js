import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <img src="/images/profile.jpg" alt="quote" />
    </>
  );
}

export default FirstPost;
