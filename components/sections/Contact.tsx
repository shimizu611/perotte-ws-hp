"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    message: "",
    company: "", // honeypot用
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          email: "",
          message: "",
          company: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 py-24 bg-white">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <p className="text-orange-600 font-semibold tracking-wider mb-3">
                CONTACT
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                お問い合わせ
            </h2>

            <p className="text-gray-600 leading-8">
                ホームページ制作についてのご相談やご質問など、
                お気軽にお問い合わせください。
                <br />
                まずはご相談だけでも歓迎しております。
            </p>
            </div>

            <div className="bg-[#f8f5ef] rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit}>
                {/* ロボット対策：通常ユーザーには見えない項目 */}
                <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                />

                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                    メールアドレス
                </label>

                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="example@example.com"
                    className="
                    w-full border border-gray-300 rounded-xl px-4 py-3 bg-white
                    focus:outline-none focus:ring-2 focus:ring-orange-200
                    "
                />
                </div>

                <div className="mb-8">
                <label className="block mb-2 text-sm font-medium">
                    お問い合わせ内容
                </label>

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    placeholder={`（例）ホームページ制作について相談したいです。
・業種：
・掲載したい内容：
・ご予算：`}
                    className="
                    w-full border border-gray-300 rounded-xl px-4 py-3 bg-white resize-none
                    focus:outline-none focus:ring-2 focus:ring-orange-200
                    "
                />
                </div>

                <button
                type="submit"
                disabled={status === "sending"}
                className="
                    w-full bg-[#1f2937] hover:bg-[#111827] disabled:opacity-60
                    text-white font-semibold py-4 rounded-xl transition
                "
                >
                {status === "sending" ? "送信中..." : "送信する"}
                </button>

                {status === "success" && (
                <p className="mt-4 text-center text-green-700">
                    送信しました。お問い合わせありがとうございます。
                </p>
                )}

                {status === "error" && (
                <p className="mt-4 text-center text-red-600">
                    送信に失敗しました。時間をおいて再度お試しください。
                </p>
                )}
            </form>
            </div>
        </div>
      </FadeIn>
    </section>
  );
}