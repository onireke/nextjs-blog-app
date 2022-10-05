import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <img src="/images/profile.jpg" alt="quote" />
    </Layout>
  );
}

export default FirstPost;
