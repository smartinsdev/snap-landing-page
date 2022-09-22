import Link from "next/link";

type Props = {};

const clientList = [
  {
    srcUrl: "/images/client-databiz.svg",
    name: "client databiz",
  },
  {
    srcUrl: "/images/client-audiophile.svg",
    name: "client audiophile",
  },
  {
    srcUrl: "/images/client-meet.svg",
    name: "client meet",
  },
  {
    srcUrl: "/images/client-maker.svg",
    name: "client maker",
  },
];

export const Hero = (props: Props) => {
  return (
    <main className="max-w-7xl mx-auto px-0 mt-6 max-h-screen md:mt-0 md:px-10">
      <section className="h-full max-w-6xl p-0 mx-auto grid grid-cols-1 place-items-center md:p-6 md:grid-cols-2">
        <div className="h-full flex flex-col justify-around mt-0 px-6 order-2 lg:mt-8 md:order-1">
          <div className="p-4 mt-4 flex flex-col space-y-6 items-center text-center md:text-left md:items-start lg:space-y-8">
            <h1 className="text-3xl text-almost-black font-bold leading-none lg:text-5xl xl:text-7xl">
              Make remote work
            </h1>
            <p className="text-medium-gray text-sm sm:text-base md:text-lg">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <Link href="#">
              <a className="px-4 py-2 rounded-lg bg-almost-black text-almost-white hover:bg-[#2c2c2c] transition-all duration-200 lg:px-6">
                Learn more
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-between px-0 mt-6 md:mt-0 md:px-4">
            {clientList.map((client, index) => (
              <div
                key={index}
                className="h-14 w-16 grid place-items-center md:w-24"
              >
                <img
                  src={client.srcUrl}
                  alt={client.name}
                  className="object-contain max-w-full max-h-full block"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden order-2 h-full w-[70%] overflow-hidden md:block">
          <img
            src="/images/image-hero-desktop.png"
            alt="hero desktop"
            className="max-w-full max-h-full block"
          />
        </div>
        <div className="block order-1 h-full w-full md:hidden">
          <img
            src="/images/image-hero-mobile.png"
            alt="hero desktop"
            className="max-w-full max-h-full block"
          />
        </div>
      </section>
    </main>
  );
};
