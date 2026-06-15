import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 左側 */}
        <div>
          <p className="text-sm tracking-[0.3em] text-orange-600 mb-4">
            PEROTTE WEB STUDIO
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            ホームページを、
            <br />
            もっと手軽に。
          </h1>

          <p className="text-lg text-gray-600 leading-9 mb-8">
            ホームページを作りたいけど、
            何から始めればいいかわからない。
            <br />
            そんな方のために、
            シンプルで見やすいホームページを制作しています。
          </p>
          <p className="text-sm text-gray-500 mb-8">
            必要以上の打ち合わせや難しい準備は不要。
            <br />
            まずはお気軽にご相談ください。
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="
                bg-[#1f2937]
                text-white
                px-8
                py-4
                rounded-full
                hover:opacity-80
                transition
              "
            >
              お問い合わせ
            </a>

            <a
              href="#works"
              className="
                border
                border-gray-300
                px-8
                py-4
                rounded-full
                hover:bg-gray-100
                transition
              "
            >
              制作実績を見る
            </a>
          </div>
        </div>

        {/* 右側 */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full bg-orange-100 rounded-3xl" />

          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <Image
              src="/images/hero-mockup.png"
              alt="ホームページ制作イメージ"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}