import FadeIn from "@/components/animations/FadeIn";

const reasons = [
  {
    title: "シンプルだから低価格",
    description:
      "あらかじめ構成を用意しているため、制作費用を抑えることができます。",
  },
  {
    title: "打ち合わせは最小限",
    description:
      "掲載したい内容をお聞きし、その内容をもとに制作を進めます。",
  },
  {
    title: "更新の負担を減らす",
    description:
      "基本情報はホームページに、活動の様子や最新情報はSNSを活用することで、更新の手間を抑えられます。",
  },
  {
    title: "わかりやすいレイアウト",
    description:
      "お店やクラブチームを調べたときに、必要な情報がすぐに見つけられるホームページを作ります。",
  },
];

export default function Solution() {
  return (
    <section className="px-6 py-24 bg-[#f8f5ef]">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          {/* 見出し */}
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold tracking-wider mb-3">
              SOLUTION
            </p>

            <p className="text-gray-500 font-semibold mb-4">
              そのお悩み、お手伝いします
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              ホームページ制作を、シンプルに。
            </h2>

            <p className="text-gray-600 leading-8 max-w-3xl mx-auto">
              Perotte Web Studioでは、
              あらかじめ用意したホームページの構成をもとに制作を行います。
              <br />
              掲載したい内容を選んでいただくだけなので、
              専門知識や難しい準備は必要ありません。
            </p>
          </div>

          {/* こんなホームページを作ります */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-12">
            <p className="text-orange-600 font-semibold mb-3">
              こんなホームページを作ります
            </p>

            <h3 className="text-2xl md:text-4xl font-bold leading-relaxed mb-8">
              初めての方でも、
              <br className="md:hidden" />
              ご安心ください。
            </h3>

            <div className="space-y-6 text-gray-600 leading-8">
              <p>
                掲載したい内容やイメージをお聞きしながら進めるため、
                専門的な知識や事前準備は必要ありません。
              </p>
              <p>
              「何を載せればいいかわからない」
                <br className="md:hidden" />
                という状態からでも、お気軽にご相談いただけます。
              </p>
            </div>
          </div>

          {/* 選ばれる理由 */}
          <div>
            <div className="text-center mb-10">
              <p className="text-orange-600 font-semibold mb-3">
                Reason
              </p>

              <h3 className="text-2xl md:text-4xl font-bold">
                Perotte Web Studioが選ばれる理由
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white rounded-3xl p-6 shadow-sm"
                >
                  <h4 className="text-xl font-bold mb-4">
                    {reason.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-7">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}