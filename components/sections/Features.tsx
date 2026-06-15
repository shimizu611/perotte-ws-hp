import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const features = [
  {
    title: "シンプルで見やすいデザイン",
    description: [
      "必要な情報を整理し、見たい情報がすぐに見つかるホームページを制作します。",
      "派手な演出よりも、「伝わること」を重視しています。",
    ],
    image: "/images/features/feature1.png",
  },
  {
    title: "お客様の負担を減らします",
    description: [
      "何度も打ち合わせを重ねる必要はありません。",
      "最初のヒアリングで方向性を確認し、制作を進めます。",
      "お忙しい方でも安心してご依頼いただけます。",
    ],
    image: "/images/features/feature2.png",
  },
  {
    title: "公開後も相談できます",
    description: [
      "ホームページ公開後も、軽微な修正やご相談に対応いたします。",
      "「公開して終わり」ではなく、長く使っていただけるサイトを目指しています。",
    ],
    image: "/images/features/feature3.png",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 bg-[#f8f5ef]">
        <div className="max-w-6xl mx-auto">
            <p className="text-orange-600 font-semibold tracking-wider mb-3">
            FEATURE
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-14">
            Perotte Web Studioの特徴
            </h2>

            <div className="space-y-8">
            {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={index * 0.1}>
                    <div
                        className="
                        grid
                        md:grid-cols-[1.1fr_0.9fr]
                        gap-8
                        items-center
                        bg-white
                        rounded-3xl
                        p-6
                        md:p-10
                        shadow-sm
                    "
                    >
                        {/* テキスト */}
                        <div>
                            <p className="text-orange-600 font-bold mb-3">
                            0{index + 1}
                            </p>

                            <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            {feature.title}
                            </h3>

                            <div className="space-y-4 text-gray-600 leading-8">
                            {feature.description.map((text) => (
                                <p key={text}>{text}</p>
                            ))}
                            </div>
                        </div>

                        {/* 図・イラスト */}
                        <div className="relative h-[220px] md:h-[260px] rounded-3xl bg-[#f3f0e8] overflow-hidden flex items-center justify-center">
                            <Image
                            src={feature.image}
                            alt={feature.title}
                            width={260}
                            height={260}
                            className="object-contain w-44 md:w-56 h-auto"
                            />
                        </div>
                    </div>
                </FadeIn>
            ))}
            </div>
        </div>
    </section>
  );
}