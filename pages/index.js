import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Abdulfatah is a dedicated and an active Javascript/React based
          Frontend Developer seeking entry level Frontend opportunities
          utilizing React.js/Next.js. He works personably and resourcefully in a
          team environment and independently to find efficient solutions to
          complex problems.
        </p>
        <p>
          (You can reach me on{" "}
          <a href="https://twitter.com/BlessedCoder">Twitter</a> or{" "}
          <a href="https://www.linkedin.com/in/amosa-abdulfatah-olayinka-5a224615b/">
            Linkedin
          </a>{" "}
          )
        </p>
      </section>
    </Layout>
  );
}
