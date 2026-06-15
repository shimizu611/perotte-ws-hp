import Image from "next/image";

const problems = [
  {
    title: "何を載せればいいかわからない",
    image: "/images/problem1.png",
  },
  {
    title: "制作費用が高そう",
    image: "/images/problem2.png",
  },
  {
    title: "更新作業が面倒",
    image: "/images/problem3.png",
  },
  {
    title: "SNSだけでは伝わりにくい",
    image: "/images/problem4.png",
  },
];

const works = [
  {
    title: "ミニバスチームHP",
    desc: "チーム紹介・練習場所・お問い合わせを掲載",
    image: "/images/work-1.jpg",
  },
  {
    title: "店舗向けLP",
    desc: "サービス紹介・料金・アクセスをわかりやすく整理",
    image: "/images/work-2.jpg",
  },
  {
    title: "ポートフォリオサイト",
    desc: "プロフィール・制作実績・お問い合わせを掲載",
    image: "/images/work-3.jpg",
  },
];

const prices = [
  {
    name: "シンプルプラン",
    price: "30,000円〜",
    desc: "まずはホームページを持ちたい方向け",
    items: ["1ページ構成", "スマホ対応", "お問い合わせフォーム", "SEO基本設定"],
  },
  {
    name: "スタンダードプラン",
    price: "50,000円〜",
    desc: "内容をしっかり伝えたい方向け",
    items: ["複数セクション対応", "スマホ対応", "お問い合わせフォーム", "公開サポート"],
  },
  {
    name: "スポーツチーム応援プラン",
    price: "ご相談ください",
    desc: "ミニバス・U15・地域クラブ向け",
    items: ["活動紹介", "練習場所案内", "保護者向け情報", "ご予算に応じて対応"],
  },
];

export default function Home() {
  return (
    <main className="bg-[#f8f5ef] text-[#222]">
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-widest text-orange-700 mb-4">
              Perotte Web Studio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              ホームページを、
              <br />
              もっと手軽に。
            </h1>

            <p className="text-lg leading-9 mb-8">
              ホームページを作りたいけど、
              何から始めればいいかわからない。
              <br />
              そんな方のために、シンプルで見やすいホームページを制作します。
            </p>

            <a
              href="#contact"
              className="inline-block bg-[#1f2937] text-white px-8 py-4 rounded-full hover:opacity-80 transition"
            >
              お問い合わせはこちら
            </a>
          </div>

          <div className="rounded-3xl bg-white shadow-xl p-6">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-orange-200 to-yellow-100 flex items-center justify-center text-gray-600">
              Hero Image
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            こんなお悩みありませんか？
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-[#f8f5ef] rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold mb-3">
                  {problem.title}
                </h3>

                <div className="flex justify-end">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    width={80}
                    height={80}
                    className="opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-700 font-bold mb-4">Solution</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            そのお悩み、お手伝いします。
          </h2>

          <p className="leading-9 text-lg">
            Perotte Web Studioでは、
            「わかりやすく伝えること」を大切にしたホームページ制作を行っています。
            <br />
            専門用語はできるだけ使わず、必要以上の打ち合わせや難しい準備を減らしながら、
            お客様の目的に合ったサイトをご提案します。
          </p>
        </div>
      </section>

      {/* Works */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-orange-700 font-bold mb-3">Works</p>
            <h2 className="text-3xl md:text-4xl font-bold">制作実績</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work) => (
              <div
                key={work.title}
                className="bg-[#f8f5ef] rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{work.title}</h3>
                  <p className="leading-7 text-gray-700">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-700 font-bold mb-3">Feature</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Perotte Web Studioの特徴
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">シンプルで見やすい</h3>
              <p className="leading-8">
                必要な情報を整理し、見たい情報がすぐに見つかるサイトを制作します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">負担を減らす制作</h3>
              <p className="leading-8">
                最初のヒアリングで方向性を確認し、できるだけ少ない準備で進めます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">公開後も相談可能</h3>
              <p className="leading-8">
                公開後の軽微な修正やご相談にも対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-700 font-bold mb-3">Price</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">参考価格</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((plan) => (
              <div
                key={plan.name}
                className="border border-gray-200 rounded-3xl p-8 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-700 mb-6">{plan.desc}</p>

                <ul className="space-y-3 mb-8">
                  {plan.items.map((item) => (
                    <li key={item}>✔ {item}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto text-center bg-[#1f2937] text-white py-3 rounded-full hover:opacity-80 transition"
                >
                  相談する
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto bg-[#1f2937] text-white rounded-3xl p-8 md:p-14">
          <p className="text-orange-300 font-bold mb-3">Sports Team Support</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            スポーツチームを応援しています
          </h2>

          <p className="leading-9 text-lg">
            私はミニバスケットボールチームの活動に携わっています。
            <br />
            そのため、ミニバス・U15クラブチーム・地域スポーツ団体については、
            できる限りご相談しやすい価格で対応したいと考えています。
          </p>
        </div>
      </section>

      {/* Flow */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-700 font-bold mb-3">Flow</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">制作の流れ</h2>

          <div className="space-y-6">
            {["お問い合わせ", "ヒアリング", "制作", "ご確認", "公開"].map(
              (step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-6 bg-[#f8f5ef] p-6 rounded-2xl"
                >
                  <span className="text-2xl font-bold text-orange-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xl font-bold">{step}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-700 font-bold mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            まずはお気軽にご相談ください
          </h2>

          <p className="leading-9 text-lg mb-10">
            ホームページ制作についてのご相談やご質問は、
            お問い合わせフォームよりお気軽にご連絡ください。
          </p>

          <a
            href="mailto:sample@example.com"
            className="inline-block bg-[#1f2937] text-white px-10 py-4 rounded-full hover:opacity-80 transition"
          >
            メールで相談する
          </a>
        </div>
      </section>
    </main>
  );
}