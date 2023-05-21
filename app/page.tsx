import Search from "./components/Search";

export default function Home() {
  return (
    <main className="mt-20">
      <h2 className="text-4xl text-center ">
        Search for Instant Results <br /> from Wikipedia
      </h2>
      <div className="flex mt-8 w-full justify-center">
        <Search />
      </div>
    </main>
  );
}
