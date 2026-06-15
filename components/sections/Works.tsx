import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const works = [
  {
    title: "兵庫県下ミニバスケットボールクラブ様",
    description:
      "チーム紹介・活動スケジュール・お問い合わせ機能を掲載",
    pcImage: "/images/Works/minibas-pc.png",
    spImage: "/images/Works/minibas-sp.png",
    url: "https://www.matsugaoka-mbbc.com/",
  },
];

export default function Works() {
  return (
    <section id="works" className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-14">
          <p className="text-orange-600 font-semibold tracking-wider mb-3">
            WORKS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            制作実績
          </h2>
        </div>

        {/* 実績カード */}
        <div className="max-w-4xl mx-auto">
          {works.map((work) => (
            <div
              key={work.title}
              className="
                bg-[#f8f5ef]
                rounded-3xl
                p-8
                shadow-sm
              "
            >
              {/* 画像エリア */}
              <div className="relative mb-10 md:mb-20 pb-20 md:pb-0">
                <div className="bg-white p-3 rounded-2xl shadow-lg">

                    {/* PC画面 */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                    <Image
                        src={work.pcImage}
                        alt={`${work.title}のPC表示`}
                        fill
                        className="object-cover"
                    />
                    </div>
                </div>
                {/* スマホ画面 */}
                <div
                    className="
                    absolute
                    right-2
                    bottom-[-10px]
                    w-[28%]
                    min-w-[90px]
                    max-w-[150px]
                    aspect-[9/16]
                    rounded-2xl
                    overflow-hidden
                    bg-white
                    border-4
                    border-white
                    shadow-xl

                    md:right-8
                    md:bottom-[-40px]
                    md:w-[170px]
                    md:max-w-none
                    md:rounded-3xl
                    "
                >
                  <Image
                      src={work.spImage}
                      alt={`${work.title}のスマホ表示`}
                      fill
                      className="object-cover"
                  />
                </div>
              </div>

              {/* テキスト */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {work.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-6">
                  {work.description}
                </p>

                <a
                  href={work.url}
                  className="
                    inline-block
                    text-orange-600
                    font-semibold
                    hover:opacity-70
                    transition
                  "
                >
                  詳細を見る →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}