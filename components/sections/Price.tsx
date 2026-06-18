import FadeIn from "@/components/animations/FadeIn";


const plans = [
  {
    name: "シンプルプラン",
    price: "30,000円〜",
    target: "ホームページをまず持ちたい方向け",
    items: [
      "1ページ構成",
      "スマホ対応",
      "お問い合わせフォーム",
      "SEO基本設定",
      "公開サポート",
    ],
  },
  {
    name: "スタンダードプラン",
    price: "80,000円〜",
    target: "事業紹介やサービス紹介を充実させたい方向け",
    items: [
      "複数ページ対応",
      "スマホ対応",
      "お問い合わせフォーム",
      "SEO基本設定",
      "公開サポート",
    ],
  },
  {
    name: "スポーツチーム応援プラン",
    price: "ご相談ください",
    target: "活動内容やご予算に応じて対応いたします。",
    items: [
      "ミニバス",
      "U15クラブチーム",
      "地域スポーツ団体",
    ],
  },
];

export default function Price() {
  return (
    <section className="px-6 py-24 bg-white">
      <FadeIn>
        <div className="max-w-6xl mx-auto">

            {/* 見出し */}
            <div className="text-center mb-14">
            <p className="text-orange-600 font-semibold tracking-wider mb-3">
                PRICE
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
                料金案内
            </h2>
            </div>

            {/* プラン */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan) => (
                <div
                key={plan.name}
                className="
                    border
                    border-gray-200
                    rounded-3xl
                    p-8
                    bg-[#f8f5ef]
                "
                >
                <h3 className="text-2xl font-bold mb-4">
                    {plan.name}
                </h3>

                <p className="text-4xl font-bold text-orange-600 mb-6">
                    {plan.price}
                </p>

                <ul className="space-y-3 mb-8">
                    {plan.items.map((item) => (
                    <li key={item} className="flex gap-2">
                        <span className="text-orange-600">✓</span>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>

                <p className="text-gray-600 leading-7">
                    {plan.target}
                </p>
                </div>
            ))}
            </div>

            {/* スポーツチーム応援 */}
            <div
            className="
                bg-gradient-to-r
                from-slate-900
                to-slate-800
                rounded-3xl
                p-8
                md:p-14
                text-white
            "
            >
            <p className="text-orange-400 font-semibold tracking-wider mb-3">
                SPORTS TEAM SUPPORT
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-8">
                スポーツチームを応援しています
            </h3>

            <div className="max-w-4xl space-y-6 text-gray-300 leading-8">
                <p>
                チーム運営を行う中で、
                </p>

                <ul className="space-y-2 ml-4">
                <li>・ホームページを作る労力や費用がない</li>
                <li>・入団希望者へ活動内容を伝えたい</li>
                <li>・保護者や地域の方に、もっと信頼感を持ってもらいたい</li>
                </ul>

                <p>
                といった悩みはありませんか？
                </p>

                <p>
                そのため、地域スポーツチームの活動を
                ホームページ制作を通じて応援したいと考えています。
                </p>

                <p>
                予算内で収まるサービスを検討いたします。
                </p>
            </div>
            </div>
        </div>
      </FadeIn>
    </section>
  );
}