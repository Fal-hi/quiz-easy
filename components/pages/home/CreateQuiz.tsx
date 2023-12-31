import { PlusSquare } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import Stationery from "@/public/images/stationery.png"

export default function CreateQuiz() {
  return (
    <section className="bg-[#F3E2FE] rounded-lg my-12 p-6 md:py-10 md:px-16 flex flex-col-reverse md:justify-center md:flex-row">
      <div className="md:w-[55%]">
        <h1 className="font-bold text-3xl text-primary text-center md:text-left">Buat Quiz Anda Sendiri</h1>
        <p className="text-[#4E4E4E] leading-7 my-4">
          Mulai buat quiz anda sendiri, dengan pertanyaan soal yang menarik dan
          membuat murid atau calon karyawan anda menjadi tertantang dengan quiz
          yang anda buat
        </p>
        <Link
          href={"#"}
          className="bg-primary text-white text-xl flex gap-4 items-center font-bold rounded-md py-2 px-6 max-w-max mx-auto md:mx-0"
        >
          <PlusSquare />
          Buat Quiz
        </Link>
      </div>
      <div className="md:w-[45%] mb-4 md:mt-0">
        <Image
          width={300}
          height={300}
          src={Stationery}
          className="w-56 h-auto mx-auto"
          alt="Stationery image"
        />
      </div>
    </section>
  );
}
