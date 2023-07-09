import Woman from "@/public/images/woman.png";
import Quiz from "@/public/images/quiz.png";
import BlockGreen from "@/public/images/block-green.png";
import Image from "next/image";

export default function Explanation() {
  return (
    <section className="explanation lg:flex lg:justify-center">
      <div className="lg:w-[35%] flex justify-center">
        <Image
          width={200}
          height={200}
          src={Woman}
          className="w-56 h-auto mt-6"
          alt="Woman"
        />
        <Image
          width={50}
          height={50}
          src={Quiz}
          className="w-20 h-20 -ml-10"
          alt="Quiz"
        />
      </div>
      <article className="mt-4 md:mt-0 lg:w-[55%]">
        {/* START:Title */}
        <div className="text-center text-4xl text-primary font-bold">
          <h1>Apa Itu</h1>
          <div className="flex items-center justify-center relative mx-auto">
            <Image
              className="w-[220px] h-12"
              width={250}
              height={200}
              src={BlockGreen}
              alt="Block Green"
            />
            <span className="text-center absolute pr-4">Quiz EAZY</span>?
          </div>
        </div>
        {/* END:Title */}

        {/* START:Content */}
          <p className="leading-7 text-[#4E4E4E] mt-6">Quiz EASY merupakan penyedia platform untuk guru, perusahaan, dll dalam membangun soal quiz guna menguji murid atau calon karyawan dalam melakukan test pertanyaan maupun pengetahuan, di permudah lagi dengan adanya papan score disetiap ruangan guna mengetahui murid atau calon karyawan terbaik</p>
        {/* END:Content */}
      </article>
    </section>
  );
}
