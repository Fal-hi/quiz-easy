import Image from "next/image";
import BlockGreen from "@/public/images/block-green.png";
import GreenTagPriceRoom from "@/public/images/verify-green.png";
import BlueTagPriceRoom from "@/public/images/verify-blue.png";
import { MiniBooks, Verify } from "@/components/icons";
import Link from "next/link";

interface InterfaceRoom {
  id: number;
  title: string;
  company: string;
  manyTypesOfQuestions: number;
}

const rooms: InterfaceRoom[] = [
  {
    id: 1,
    title: "Free",
    company: "PT Surya Darma",
    manyTypesOfQuestions: 15,
  },
  {
    id: 2,
    title: "Interview",
    company: "PT Surya Darma",
    manyTypesOfQuestions: 15,
  },
  {
    id: 3,
    title: "Class 1KA33",
    company: "PT Surya Darma",
    manyTypesOfQuestions: 15,
  },
  {
    id: 4,
    title: "Class 1KA34",
    company: "PT Surya Darma",
    manyTypesOfQuestions: 15,
  },
  {
    id: 5,
    title: "Class 2KA34",
    company: "PT Surya Darma",
    manyTypesOfQuestions: 15,
  },
  {
    id: 6,
    title: "Class 4KA33",
    company: "PT Surya Darma",
    manyTypesOfQuestions: 15,
  },
];

export default function Rooms() {
  return (
    <section className="rooms mt-8">
      {/* START:Title */}
      <section className="text-center text-4xl text-primary font-bold">
        <h1>Explore Ruangan</h1>
        <div className="flex items-center justify-center relative mx-auto">
          <Image
            className="w-[220px] h-12"
            width={250}
            height={200}
            src={BlockGreen}
            alt="Block Green"
          />
          <span className="text-center absolute pr-4">Quiz Soal</span>?
        </div>
      </section>
      {/* END:Title */}

      {/* START:Rooms */}
      <section className="rooms">
        <div className="lg:grid lg:grid-cols-2 gap-6 mt-12">
          {rooms.map((room: any) => (
            <div key={room.id} className="flex justify-center mb-8">
              <section className="card bg-white w-auto h-auto py-12 px-6 md:px-20 md:py-20 relative">
                <div className="absolute -top-4 right-0">
                  <div className="relative">
                    <Image
                      width={100}
                      height={100}
                      className="w-16 md:w-28 h-auto"
                      src={room.id === 1 ? GreenTagPriceRoom : BlueTagPriceRoom}
                      alt="Tag price"
                    />
                    <span className="text-center text-white px-4 absolute inset-0 flex items-center justify-center text-[10px] md:text-sm font-bold">
                      {room.id === 1 ? "Ruangan Free" : "Premium"}
                    </span>
                  </div>
                </div>
                <h5 className="text-[#9EB1B4] text-sm mt-2 mb-1">RUANGAN</h5>
                <h2 className="text-3xl md:text-4xl text-primary font-bold mb-1">
                  {room.title}
                </h2>
                <h6 className="flex items-center text-primary font-bold text-xs mb-4">
                  {room.company}
                  <Verify />
                </h6>
                <div className="flex justify-between gap-4 items-center">
                  <Link
                    href={"#"}
                    className="bg-primary text-white text-xs md:text-sm font-bold py-2 px-4 md:px-16"
                  >
                    Masuk Ruangan
                  </Link>
                  <div className="question flex items-center gap-2 text-[#9EB1B4] text-sm">
                    <MiniBooks />
                    <p>{room.manyTypesOfQuestions} Jenis Soal</p>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
      {/* END:Rooms */}
    </section>
  );
}
