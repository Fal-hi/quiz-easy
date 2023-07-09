import {
  Email,
  Instagram,
  LinkedIn,
  Q,
  WhatsApp,
  Youtube,
} from "@/components/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-[#D7D7D7]">
      <section className="md:flex md:justify-between w-[85%] mx-auto py-12">
        {/* START:Row 1 */}
        <div className="md:w-[40%]">
          <div className="flex items-end mb-3">
            <Q fill="#DBDBDB" width="55" height="55" />
            <h1 className="text-3xl text-[#DBDBDB] font-bold">UIZ EASY</h1>
          </div>
          <p className="text-base leading-7">
            Quiz EASY merupakan penyedia platform untuk membangun soal quiz guna
            menguji kemampuan seseoarang dalam melakukan test pertanyaan maupun
            pengetahuan
          </p>
        </div>
        {/* END:Row 1 */}

        {/* START:Row 2 */}
        <div className="md:w-[50%] mt-4 md:mt-0">
          <section className="flex justify-between gap-8">
            <div className="block leading-9">
              <h6 className="font-bold">Kontak</h6>
              <ul>
                <li>
                  <Link className="mt-2" href={"#"}>
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link className="mt-2" href={"#"}>
                    Email
                  </Link>
                </li>
                <li>
                  <Link className="mt-2" href={"#"}>
                    Telegram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block leading-9">
              <h6 className="font-bold">Sosial Media</h6>
              <ul>
                <li>
                  <Link className="mt-2" href={"#"}>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link className="mt-2" href={"#"}>
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link className="mt-2" href={"#"}>
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
            <div className="block leading-9">
              <h6 className="font-bold">Bantuan</h6>
              <ul>
                <li>
                  <Link className="mt-2" href={"#"}>
                    Faq
                  </Link>
                </li>
                <li>
                  <Link className="mt-2" href={"#"}>
                    Tentang Kami
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="social-media mt-10">
            <ul className="flex justify-between">
              <li>
                <Link href={"#"}>
                  <WhatsApp />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <LinkedIn />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Youtube />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <Email />
                </Link>
              </li>
            </ul>
          </section>
        </div>
        {/* END:Row 2 */}
      </section>
    </footer>
  );
}
