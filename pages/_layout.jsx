import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <nav className="flex">
        <Link
          href="/"
          className="font-bold p-4 text-lg hover:underline underline-offset-2 decoration-2 hover:decoration-pink-400"
        >
          React Examples
        </Link>
      </nav>
      <main className={`mx-auto max-w-xl p-4 md:p-8 ${inter.className}`}>
        <section>{children}</section>
      </main>
      <footer></footer>
    </>
  );
}
