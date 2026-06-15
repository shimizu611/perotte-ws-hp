import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const problems = [
  {
    title: "何を載せればいいかわからない",
    description:
      "ホームページを作りたい気持ちはあるけど、どんな内容を準備すればいいのかわからない。",
    image: "/images/Problems/problem1.png",
  },
  {
    title: "費用が高そうで不安",
    description:
      "制作会社に依頼すると高額になりそうで、なかなか一歩を踏み出せない。",
    image: "/images/Problems/problem2.png",
  },
  {
    title: "更新作業に時間をかけたくない",
    description:
      "日々の業務や活動で手一杯。できるだけ更新の手間を減らしたい。",
    image: "/images/Problems/problem3.png",
  },
  {
    title: "SNSだけでは伝わりにくい",
    description:
      "投稿が流れてしまい、必要な情報をきちんと届けられているか不安。",
    image: "/images/Problems/problem4.png",
  },
  {
    title: "サービスをもっと知ってほしい",
    description:
      "お客様や利用者に、サービスや活動内容をわかりやすく伝えたい。",
    image: "/images/Problems/problem5.png",
  },
  {
    title: "専門的なことがよくわからない",
    description:
      "ドメインやサーバーなど、難しい言葉が多くて不安を感じる。",
    image: "/images/Problems/problem6.png",
  },
];

export default function Problems() {
  return (
    <FadeIn>

      <section className="relative px-6 py-24 overflow-hidden">

        {/* 背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

        {/* オレンジのぼかし */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl" />

        {/* コンテンツ */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-orange-400 font-semibold tracking-wider mb-3">
            PROBLEM
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            こんなお悩みありませんか？
          </h2>

          <p className="text-gray-300 leading-8 max-w-3xl mb-14">
            ホームページ制作を考えたとき、
            多くの方が同じような悩みや不安を抱えています。
          </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((problem) => (
                <div
                  key={problem.title}
                  className="
                    relative
                    bg-white/5
                    backdrop-blur-sm
                    border
                    border-white/10
                    rounded-3xl
                    p-6
                    overflow-hidden
                    min-h-[220px]
                    hover:bg-white/10
                    transition
                  "
                >
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                    {problem.title}
                  </h3>

                  <Image
                    src={problem.image}
                    alt=""
                    width={90}
                    height={90}
                    className="
                      absolute
                      bottom-4
                      right-4
                      rounded-full
                      pointer-events-none
                    "
                  />

                  <p className="text-gray-300 text-sm leading-7 relative z-10 pr-24 py-4">
                    {problem.description}
                  </p>
                </div>
            ))}          
            </div>
        </div>
      </section>

    </FadeIn>
  );
}