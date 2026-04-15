import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="Services"
      className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#fff5e3] via-[#fff0db] to-[#fff7ee] text-[#111]"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        Video Editing Plans
      </motion.h2>

      {/* MAIN PLANS */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className={`
              bg-white text-black p-8 rounded-2xl shadow-lg
              border border-black/10
              transition
              ${plan.highlight ? "scale-105 border-[#ff7a18]" : ""}
            `}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            <p className="text-gray-500 mb-4">{plan.sub}</p>

            <p className="font-semibold mt-3">Duration:</p>
            <p>{plan.duration}</p>

            <p className="font-semibold mt-4">Includes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-6 text-[#ff7a18]">
              {plan.price}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* MONTHLY */}
      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          📅 Monthly Plans
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {monthly.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="bg-white text-black p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <ul className="list-disc pl-5 space-y-1">
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <h3 className="text-[#ff7a18] font-bold mt-5">
                {plan.price}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WEEKLY */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">📆 Weekly Plan</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -10 }}
          className="bg-white text-black p-8 rounded-2xl shadow-lg max-w-[400px] mx-auto"
        >
          <h3 className="text-xl font-bold mb-4">Weekly Plan</h3>
          <ul className="list-disc pl-5 space-y-1 text-left">
            <li>5–7 Reels</li>
            <li>Basic–Standard Editing</li>
            <li>48 hr delivery</li>
          </ul>
          <h3 className="text-[#ff7a18] font-bold mt-5">
            ₹2000 – ₹5000
          </h3>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-4">
          ⚠️ Prices are negotiable — let’s find what works for you
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Choose Your Editing Style
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {styles.map((s, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-[#ff7a18] rounded-full text-sm hover:bg-[#ff7a18] hover:text-white transition"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href="https://wa.me/918821811285"
          target="_blank"
        >
          <button
            className="
            bg-[#ff7a18] px-8 py-3 rounded-full
            hover:bg-[#e66a10]
            hover:scale-105
            transition
          "
          >
            Get Started Now
          </button>
        </a>
      </div>
    </section>
  );
}

/* DATA */
const plans = [
  {
    title: "🎬 Basic Edit",
    sub: "Short Form / Reels",
    duration: "Up to 30–45 sec",
    features: [
      "Basic editing (cuts & trims)",
      "Background music",
      "Simple captions",
      "Clean transitions",
      "1 Revision",
    ],
    price: "₹349 / video",
  },
  {
    title: "🚀 Standard Edit",
    sub: "Growth Editing",
    duration: "Up to 60 sec",
    features: [
      "Advanced cuts + captions",
      "Trend-style editing",
      "Motion elements & emojis",
      "Color correction",
      "1–2 Revisions",
    ],
    price: "₹699 – ₹1499 / video",
    highlight: true,
  },
  {
    title: "🔥 Premium Edit",
    sub: "Cinematic / Ads",
    duration: "Up to 1–3 min",
    features: [
      "Cinematic editing",
      "Advanced motion graphics",
      "Sound design + color grading",
      "Story-based editing",
      "2 Revisions",
    ],
    price: "₹1500 – ₹4000 / video",
  },
];

const monthly = [
  {
    title: "Starter Plan",
    features: [
      "15–20 Reels",
      "Basic–Standard Editing",
      "48 hr delivery",
    ],
    price: "₹6000 – ₹12000",
  },
  {
    title: "Growth Plan",
    features: [
      "20–30 Videos",
      "Advanced editing",
      "Priority delivery",
    ],
    price: "₹12000 – ₹25000",
  },
];

const styles = [
  "Cinematic Edits",
  "Typography Edits",
  "Real Estate Edits",
  "Documentary Edits",
  "Promotional / Ads",
  "Reels / Short Form",
  "Motion Graphics",
];