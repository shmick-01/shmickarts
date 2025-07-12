
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-shmicGreen text-shmicCream py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Shmic ✦ Arts</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <Link href="/">Home</Link>
            <Link href="/beauty">Beauty</Link>
            <Link href="/candy">Candy & Spices</Link>
            <Link href="/treats">Treats & Drinks</Link>
            <Link href="/foundation">Foundation</Link>
            <Link href="/branding">Branding</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-shmicGold text-black py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} SHMIC Arts – Crafted with excellence.
      </footer>
    </div>
  );
}
