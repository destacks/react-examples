import Link from "next/link";

const Home = () => (
  <main>
    <h1>React Examples</h1>
    <ul>
      <li>
        <Link href="/example-page-01">Example Page 01 - Jul 24, 2023</Link>
      </li>
      <li>
        <Link href="/example-page-02">Example Page 02 - Aug 8, 2023</Link>
      </li>
    </ul>
  </main>
);

export default Home;
