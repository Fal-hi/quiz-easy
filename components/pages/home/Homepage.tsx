import Nav from "@/components/layouts/nav/Nav";
import Image from "next/image";
import AlphabetsImage from "@/public/images/alphabet.png";
import BlockGreen from "@/public/images/block-green.png";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="homepage lg:h-[90vh]">
      <section className="max-w-[85%] mx-auto">
        <Nav />
        <section className="md:flex md:justify-between mt-2 md:mt-16">
          <article className="lg:w-2/4">
            <div className="title text-4xl text-primary font-bold">
              {/* for desktop */}
              <div className="hidden md:flex">
                <h2 className="flex items-center">
                  Buat
                  <div className="flex items-center justify-center relative">
                    <Image
                      className="max-w-max"
                      width={200}
                      height={200}
                      src={BlockGreen}
                      alt="Block Green"
                    />
                    <span className="text-center absolute">quiz soal</span>
                  </div>
                  menarik
                </h2>
              </div>
              {/* for mobile */}
              <div className="md:hidden">
                <h2 className="flex items-center">
                  Buat
                  <div className="flex items-center justify-center relative">
                    <Image
                      className="md:max-w-max"
                      width={200}
                      height={200}
                      src={BlockGreen}
                      alt="Block Green"
                    />
                    <span className="text-center absolute">quiz soal</span>
                  </div>
                </h2>
                <h2>menarik dengan</h2>
              </div>
              <h2><span className="hidden md:block">dengan</span> pembelajaran online</h2>
            </div>
            <div className="content block text-[#5F5F5F] text-lg mt-5">
              <p>
                Buat pembelajaran anda menjadi menarik dengan membuat soal quiz
                secara online dengan waktu yang ditentukan, dan ada leaderboard
                disetiap ruangan
              </p>
            </div>
            <div className="auth flex gap-6 items-center mt-10">
              <Link
                href={"#"}
                className="bg-primary text-white rounded-md py-1 px-12 font-bold border-2 border-primary text-lg"
              >
                Daftar
              </Link>
              <Link
                href={"#"}
                className="bg-white text-primary rounded-md py-1 px-12 font-bold border-2 border-primary text-lg"
              >
                Masuk
              </Link>
            </div>
          </article>
          <div className="hidden md:block image lg:w-1/3">
            <Image
              width={400}
              height={400}
              className="w-[20rem] mx-auto"
              src={AlphabetsImage}
              alt="Alphabets Image"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
