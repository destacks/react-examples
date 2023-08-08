import Link from "next/link";

const Home = () => (
  <>
    <ul>
      <li className="my-4">
        <Link
          href="/examples-01"
          className="m-8 text-lg font-medium hover:underline underline-offset-2 decoration-2 hover:decoration-pink-400"
        >
          Examples 01 - Jul 24, 2023
        </Link>
      </li>
      <li>
        <Link
          href="/examples-02"
          className="m-8 text-lg font-medium hover:underline underline-offset-2 decoration-2 hover:decoration-pink-400"
        >
          Examples 02 - Aug 8, 2023
        </Link>
      </li>
    </ul>
  </>
);

export default Home;
