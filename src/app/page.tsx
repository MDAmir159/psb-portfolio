import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Vushki</h1>
      <p className="text-lg mb-8">Your go-to destination for cutting-edge technology solutions.</p>
      <Link href="/service" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explore Our Services
      </Link>
    </div>
    </>
  );
}
