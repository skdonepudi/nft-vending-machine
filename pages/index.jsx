import Link from "next/link";
export default function MainPage() {
  return (
    // A centerd div with 3 NFT images with their name, price and a link to their page

    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-indigo-400 to-cyan-400">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl my-10 text-center font-bold">
          <a> Nanban Foundation NFT Marketplace</a>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href={{ pathname: "/home", query: { cls: "Silver" } }}>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/1.jpg"
                className="w-full h-64 object-cover"
                alt={"name"}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">
                  Silver class NFT
                </h3>
                <div className="flex items-center justify-center">
                  <p className="text-gray-400 text-lg">Price: 0.5 </p>
                  <img
                    src="/images/solanaLogoMark.svg"
                    className="w-5 h-5 ml-2"
                    alt={"name"}
                  />
                </div>

                <Link href={{ pathname: "/home", query: { cls: "Silver" } }}>
                  <a className="block w-full py-2 mt-2 text-center font-medium bg-indigo-500 hover:text-gray-300">
                    Buy NFT
                  </a>
                </Link>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: "/home", query: { cls: "Gold" } }}>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/2.jpg"
                className="w-full h-64 object-cover"
                alt={"name"}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">
                  Gold class NFT
                </h3>
                <div className="flex items-center justify-center">
                  <p className="text-gray-400 text-lg">Price: 10 </p>
                  <img
                    src="/images/solanaLogoMark.svg"
                    className="w-5 h-5 ml-2"
                    alt={"name"}
                  />
                </div>
                <Link href={{ pathname: "/home", query: { cls: "Gold" } }}>
                  <a className="block w-full py-2 mt-2 text-center font-medium bg-indigo-500 hover:text-gray-300">
                    Buy NFT
                  </a>
                </Link>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: "/home", query: { cls: "Diamond" } }}>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/3.jpg"
                className="w-full h-64 object-cover"
                alt={"name"}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">
                  Diamond class NFT
                </h3>
                <div className="flex items-center justify-center">
                  <p className="text-gray-400 text-lg">Price: 25</p>
                  <img
                    src="/images/solanaLogoMark.svg"
                    className="w-5 h-5 ml-2"
                    alt={"name"}
                  />
                </div>
                <Link href={{ pathname: "/home", query: { cls: "Diamond" } }}>
                  <a className="block w-full py-2 mt-2 text-center font-medium bg-indigo-500 hover:text-gray-300">
                    Buy NFT
                  </a>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
