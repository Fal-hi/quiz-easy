import { FilterBy, Footer, Searching } from "@/components/layouts";
import Homepage from "@/components/pages/home/Homepage";
import filterByOptions from "@/components/layouts/dropdown/filterByOptions";
import Rooms from "@/components/pages/home/Rooms";
import Recommended from "@/components/pages/home/Recommended";
import Explanation from "@/components/pages/home/Explanation";
import CreateQuiz from "@/components/pages/home/CreateQuiz";
import { ArrowRight } from "@/components/icons";

export default function Home() {
  return (
    <>
      <main>
        <Homepage />
        <div className="max-w-[85%] mx-auto">
          <section className="flex-none md:flex justify-between gap-8 mt-14 mb-8">
            <Searching placeholder="Search Ruangan" />
            <FilterBy options={filterByOptions} />
          </section>
          <Rooms />
          <section className="next relative my-20">
            <hr className="w-full h-1 bg-[#F3E2FE]" />
            <div className="bg-[#F3E2FE] flex gap-3 py-1 px-12 rounded-md justify-center items-center left-1/2 absolute -top-4 transform -translate-x-1/2">
              <h3 className="text-primary font-bold text-lg">Selanjutnya</h3>
              <ArrowRight />
            </div>
          </section>
          <Recommended />
          <Explanation />
          <CreateQuiz />
        </div>
      </main>
      <Footer />
    </>
  );
}
