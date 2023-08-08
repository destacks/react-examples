import Link from "next/link";

const Home = () => (
  <section className="mb-24">
    <h1 className="font-bold text-3xl mb-16">Please Choose</h1>
    <ul>
      <li className="my-4">
        <Link
          href="/examples-01"
          className="my-8 text-lg font-medium hover:underline underline-offset-2 decoration-2 hover:decoration-pink-400"
        >
          Examples 01 - Jul 24, 2023
        </Link>
      </li>
      <li>
        <Link
          href="/examples-02"
          className="my-8 text-lg font-medium hover:underline underline-offset-2 decoration-2 hover:decoration-pink-400"
        >
          Examples 02 - Aug 8, 2023
        </Link>
      </li>
    </ul>
  </section>
);

export default Home;
