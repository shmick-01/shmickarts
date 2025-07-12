
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <section className="text-center py-24 bg-gradient-to-br from-shmicGreen to-shmicGold text-shmicCream">
        <h2 className="text-5xl font-display mb-6">Welcome to Shmic Arts</h2>
        <p className="max-w-xl mx-auto text-lg">
          A soulful blend of creativity and culture. Explore our five elegant ventures, crafted with love and vision.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="/beauty" className="bg-white text-black px-6 py-2 rounded-full hover:bg-shmicCream">Beauty</a>
          <a href="/candy" className="bg-white text-black px-6 py-2 rounded-full hover:bg-shmicCream">Candy & Spices</a>
          <a href="/treats" className="bg-white text-black px-6 py-2 rounded-full hover:bg-shmicCream">Treats & Drinks</a>
          <a href="/foundation" className="bg-white text-black px-6 py-2 rounded-full hover:bg-shmicCream">Foundation</a>
          <a href="/branding" className="bg-white text-black px-6 py-2 rounded-full hover:bg-shmicCream">Branding</a>
        </div>
      </section>
    </Layout>
  );
}
