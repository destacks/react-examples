import { Html, Head, Main as Page, NextScript } from "next/document";
import Layout from "./_layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body class="min-h-screen">
        <Layout>
          <Page />
        </Layout>
        <NextScript />
      </body>
    </Html>
  );
}
