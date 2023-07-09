import Image from "next/image";
import BlockGreen from "@/public/images/block-green.png";
import Recommended1 from "@/public/images/rec1.png";
import Recommended2 from "@/public/images/rec2.png";
import Recommended3 from "@/public/images/rec3.png";

interface InterfaceRecommendedLists {
  id: number;
  image: any;
  title: string;
  content: string;
}

const recommendedLists: InterfaceRecommendedLists[] = [
  {
    id: 1,
    image: Recommended1,
    title: "Buat QUIZ Mudah",
    content: "Membuat QUIZ sangat mudah dengan QUIZ EASY",
  },
  {
    id: 2,
    image: Recommended2,
    title: "Jawab Soal Menarik",
    content:
      "Menjawab soal menjadi menarik dengan adanya score yang keluar setelah murid submit",
  },
  {
    id: 3,
    image: Recommended3,
    title: "Papan Score",
    content: "Terdapat papan score tiga terbaik disetiap ruangan",
  },
];

export default function Recommended() {
  return (
    <section className="recommended mb-20">
      {/* START:Title */}
      <section className="text-center text-4xl text-primary font-bold">
        <h1>Kenapa Harus</h1>
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
      </section>
      {/* END:Title */}

      {/* START:Content */}
      <section className="content md:flex md:gap-6 md:justify-between md:items-center mt-14">
        {recommendedLists.map((rec: InterfaceRecommendedLists) => (
          <div
            key={rec.id}
            className="card bg-white md:w-1/3 mb-8 md:mb-0 lg:h-52 pt-8 pb-4 md:pb-2 px-6 text-center rounded-md"
          >
            <Image
              width={100}
              height={100}
              src={rec.image}
              className="w-16 h-auto mx-auto"
              alt="Recommended image"
            />
            <h3 className="my-3 text-primary text-xl font-bold">{rec.title}</h3>
            <p className="text-[#A096A6] text-sm">{rec.content}</p>
          </div>
        ))}
      </section>
      {/* START:Content */}
    </section>
  );
}
