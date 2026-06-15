import IntroAnimation from "../components/IntroAnimation";
import Header from "@/components/Header"


export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
        
        <IntroAnimation/>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="#" className="text-lg font-bold tracking-wide">
              Perotte Web Studio
            </a>

            <nav className="hidden gap-6 text-sm md:flex">
              <a href="#service" className="hover:text-orange-500">サービス</a>
              <a href="#works" className="hover:text-orange-500">制作実績</a>
              <a href="#price" className="hover:text-orange-500">料金案内</a>
              <a href="#profile" className="hover:text-orange-500">制作者について</a>
              <a href="#contact" className="hover:text-orange-500">お問い合わせ</a>
            </nav>
          </div>
        </header>
          {/* Hero */}
          <section className="bg-slate-50">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-4 text-sm font-bold text-orange-500">
                  ミニバス・U15クラブチームを応援
                </p>

                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  チームの魅力が伝わる
                  <br />
                  ホームページ制作
                </h1>

                <p className="mt-6 leading-8 text-slate-600">
                  ミニバスチーム・U15クラブチーム・地域スポーツ団体向けに、
                  低価格で見やすく、問い合わせにつながるホームページを制作します。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-bold text-white hover:bg-orange-500"
                  >
                    無料で相談する
                  </a>

                  <a
                    href="#price"
                    className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-bold hover:border-orange-500 hover:text-orange-500"
                  >
                    料金を見る
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm font-bold text-slate-500">For Team</p>
                <h2 className="mt-3 text-2xl font-bold">
                  チーム紹介・部員募集・試合申込まで
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  スマホで見やすく、保護者や新入部員にも伝わりやすいサイトを作ります。
                </p>
              </div>
            </div>
          </section>
      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10">
          <p className="text-sm font-bold text-orange-500">Problem</p>
          <h2 className="mt-2 text-3xl font-bold">こんなお悩みありませんか？</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "チームの情報をうまく発信できていない",
            "部員募集や見学申込の窓口が分かりにくい",
            "ホームページ制作は高そうで相談しにくい",
          ].map((item) => (
            <div key={item} className="rounded-2xl border p-6">
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service */}
      <section id="service" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold text-orange-500">Service</p>
          <h2 className="mt-2 text-3xl font-bold">できること</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["チーム紹介ページ", "チームの特徴や活動内容を分かりやすく掲載します。"],
              ["部員募集・見学案内", "見学・体験につながる導線を整えます。"],
              ["お問い合わせフォーム", "見学申込や交流戦の申込を受け付けできます。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strength */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-bold text-orange-500">Concept</p>
        <h2 className="mt-2 text-3xl font-bold">
          地域のバスケットボールチームを応援しています
        </h2>

        <p className="mt-6 max-w-3xl leading-8 text-slate-600">
          地域で頑張るミニバスチームやU15クラブチームの活動を、
          ホームページ制作を通じてサポートしたいと考えています。
          そのため、チーム向けに導入しやすい特別価格で制作を行っています。
        </p>
      </section>

      {/* Works */}
      <section id="works" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold text-orange-500">Works</p>
          <h2 className="mt-2 text-3xl font-bold">制作実績</h2>

          <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-slate-600">
              制作実績は現在準備中です。サンプルサイト・デモサイトを掲載予定です。
            </p>
          </div>
        </div>
      </section>

      {/* Price */}
      <section id="price" className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-bold text-orange-500">Price</p>
        <h2 className="mt-2 text-3xl font-bold">料金案内</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["ライトプラン", "50,000円〜", "1ページ構成のシンプルなホームページ"],
            ["スタンダード", "100,000円〜", "複数セクション＋問い合わせフォーム対応"],
            ["保守サポート", "月額 3,000円〜", "軽微な修正・更新サポート"],
          ].map(([name, price, desc]) => (
            <div key={name} className="rounded-2xl border p-6">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-4 text-2xl font-bold text-orange-500">{price}</p>
              <p className="mt-4 leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flow */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold text-orange-500">Flow</p>
          <h2 className="mt-2 text-3xl font-bold">制作の流れ</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {["お問い合わせ", "ヒアリング", "制作・確認", "公開・納品"].map((step, index) => (
              <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-orange-500">STEP {index + 1}</p>
                <h3 className="mt-3 font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-bold text-orange-500">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold">よくある質問</h2>

        <div className="mt-10 space-y-4">
          {[
            ["スマホ対応できますか？", "はい。スマホで見やすいレスポンシブ対応で制作します。"],
            ["納期はどれくらいですか？", "内容によりますが、シンプルなサイトであれば2〜4週間程度が目安です。"],
            ["更新もお願いできますか？", "はい。月額の保守サポートで対応できます。"],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border p-6">
              <p className="font-bold">Q. {q}</p>
              <p className="mt-3 text-slate-600">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-bold text-orange-500">Profile</p>
          <h2 className="mt-2 text-3xl font-bold">制作者について</h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-600">
            地域スポーツチームの活動を、ホームページ制作を通じて支援しています。
            見やすさ・分かりやすさ・問い合わせのしやすさを大切に、
            チームに合ったサイト制作を行います。
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-bold text-orange-500">Contact</p>
        <h2 className="mt-2 text-3xl font-bold">お問い合わせ</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="leading-8 text-slate-600">
              ホームページ制作のご相談、見積もり依頼などお気軽にお問い合わせください。
              ミニバス・U15クラブチーム向けの特別価格についてもご案内します。
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="お名前"
              className="w-full rounded-xl border px-4 py-3"
            />
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full rounded-xl border px-4 py-3"
            />
            <input
              type="text"
              placeholder="チーム名・団体名"
              className="w-full rounded-xl border px-4 py-3"
            />
            <textarea
              placeholder="お問い合わせ内容"
              rows={5}
              className="w-full rounded-xl border px-4 py-3"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 font-bold text-white hover:bg-orange-500 md:w-auto"
            >
              送信する
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
          © Perotte Web Studio
        </div>
      </footer>
    </main>
  );
}