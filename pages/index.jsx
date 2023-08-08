import Link from "next/link";
import Layout from "components/layout";

const Home = () => (
  <Layout>
    <main>
      <h1 className="font-bold text-4xl mb-16">React Examples</h1>
      <ul>
        <li className="my-4">
          <Link
            href="/example-page-01"
            className="m-8 text-lg font-medium hover:underline underline-offset-2 decoration-2 hover:decoration-pink-400"
          >
            Example Page 01 - Jul 24, 2023
          </Link>
        </li>
        <li>
          <Link
            href="/example-page-02"
            className="m-8 text-lg font-medium hover:underline underline-offset-2 decoration-2 hover:decoration-pink-400"
          >
            Example Page 02 - Aug 8, 2023
          </Link>
        </li>
      </ul>
    </main>
  </Layout>
);

export default Home;
