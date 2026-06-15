import FadeIn from "@/components/animations/FadeIn";

const flows = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "まずはお問い合わせフォームよりご相談ください。",
  },
  {
    step: "02",
    title: "ヒアリング",
    description: "掲載したい内容やご希望のイメージをお聞きします。",
  },
  {
    step: "03",
    title: "制作開始",
    description: "ヒアリング内容をもとに、ホームページ制作を進めます。",
  },
  {
    step: "04",
    title: "ご確認",
    description: "完成前に内容をご確認いただき、必要に応じて調整します。",
  },
  {
    step: "05",
    title: "公開",
    description: "最終確認後、ホームページを公開します。",
  },
];

export default function Flow() {
  return (
    <section className="px-6 py-24 bg-[#f8f5ef]">
      <FadeIn>
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
            <p className="text-orange-600 font-semibold tracking-wider mb-3">
                FLOW
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
                制作の流れ
            </h2>
            </div>

            <div className="space-y-6">
            {flows.map((flow, index) => (
                <div key={flow.step}>
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm flex gap-6 items-start">
                    <div className="shrink-0 text-orange-600 text-2xl md:text-3xl font-bold">
                    {flow.step}
                    </div>

                    <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {flow.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                        {flow.description}
                    </p>
                    </div>
                </div>

                {index !== flows.length - 1 && (
                    <div className="text-center text-orange-600 text-3xl my-3">
                    ↓
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
      </FadeIn>
    </section>
  );
}